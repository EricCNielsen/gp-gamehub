require("dotenv").config();

const express = require("express"),
  massive = require("massive"),
  ctrl = require("./controller/controller.js"),
  aws = require("aws-sdk"),
  session = require("express-session"),
  pg = require("pg"),
  axios = require("axios"),
  pgSession = require("connect-pg-simple")(session);

const app = express(),
  {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET,
    S3_BUCKET,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    REACT_APP_CLIENT_ID,
    REACT_APP_DOMAIN,
    CLIENT_SECRET,
  } = process.env;

const pgPool = new pg.Pool({
  connectionString: CONNECTION_STRING
});

app.use(express.json());

app.use(
  session({
    store: new pgSession({
      pool: pgPool
    }),
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 60
    }
  })
);

//-------------- AMAZONS3 ------------------//

app.get("/api/signs3", (req, res) => {
  aws.config = {
    region: "us-west-1",
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  };

  const s3 = new aws.S3();
  const fileName = req.query["file-name"];
  const fileType = req.query["file-type"];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: "public-read"
  };

  s3.getSignedUrl("putObject", s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };

    return res.send(returnData);
  });
});

//--------------------------- AUTH0 ----------------------------//

app.get(`/auth/callback`, async (req, res, next) => {
  try {
    // use code from query in payload for token
    const payload = {
      client_id: REACT_APP_CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: req.query.code,
      grant_type: "authorization_code",
      redirect_uri: `${process.env.PROTOCOL}://${
        req.headers.host
      }/auth/callback`
    };
    // trade code for token
    let resWithToken = await axios.post(
      `https://${REACT_APP_DOMAIN}/oauth/token`,
      payload
    );

    // use token to get user data
    let resWithUserData = await axios.get(
      `https://${REACT_APP_DOMAIN}/userinfo?access_token=${
        resWithToken.data.access_token
      }`
    );
    // console.log('user data', resWithUserData.data);

    let { email, name, picture, sub } = resWithUserData.data;
    const db = req.app.get("db");
    let foundUser = await db.find_user([sub]);

    if (foundUser[0]) {
      req.session.user = foundUser[0];
      res.redirect("/dashboard");
    } else {
      let createdUser = await db.create_user([name, email, picture, sub]);
      req.session.user = createdUser[0];
      res.redirect(`/user/${req.session.user.user_id}`);
    }
  } catch (err) {
    console.log(err);
  }
});



//--------------------------- NEWS API ----------------------------//

app.get('/api/news', async (req, res) => {
  
})


//--------------------------- Endpoints ----------------------------//

// app.get("/auth/current", ctrl.checkCurrent)
app.post("/api/clan", ctrl.createClan)
app.post("/auth/logout", ctrl.logout)
app.post("/api/post", ctrl.createPost)
app.post("/api/new-ranking", ctrl.postRanking)

app.get("/auth/account", ctrl.getAuth)
app.get("/api/top5users", ctrl.top5Users)
app.get("/api/consoles", ctrl.getConsoles)
app.get("/api/search", ctrl.search)
app.get("/api/user/:id", ctrl.getUser)
app.get("/api/clan/:id", ctrl.getClan)
app.get("/api/registeredclans/", ctrl.getRegisteredClans)
app.get("/api/user-ranking/:id", ctrl.getUserRanking)

app.put("/api/user", ctrl.updateUser)
app.put("/api/update-ranking", ctrl.updateRanking)
app.put('/api/clan', ctrl.updateClan);


massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is running!");
  app.listen(SERVER_PORT, () => console.log(`cruising on port ${SERVER_PORT}`));
});
