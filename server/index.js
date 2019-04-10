require("dotenv").config()

const express = require("express"),
  massive = require("massive"),
  ctrl = require("./controller/controller"),
  aws = require("aws-sdk"),
  session = require("express-session"),
  pg = require("pg"),
  authCtrl = require("./controller/Auth/authController"),
  pgSession = require("connect-pg-simple")(session)

const app = express(),
  {
    CONNECTION_STRING,
    SERVER_PORT,
    SESSION_SECRET,
    S3_BUCKET,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY
  } = process.env

const pgPool = new pg.Pool({
  connectionString: CONNECTION_STRING
})

app.use(express.json())

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
)

//-------------- AMAZONS3 ------------------//

app.get("/api/signs3", (req, res) => {
  aws.config = {
    region: "us-west-1",
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
  }

  const s3 = new aws.S3()
  const fileName = req.query["file-name"]
  const fileType = req.query["file-type"]
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: "public-read"
  }

  s3.getSignedUrl("putObject", s3Params, (err, data) => {
    if (err) {
      console.log(err)
      return res.end()
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    }

    return res.send(returnData)
  })
})

//--------------------------- AUTH0 ----------------------------//

app.get(`/auth/callback`, authCtrl.auth0)

//--------------------------- AUTH0 ----------------------------//

massive(CONNECTION_STRING).then(db => {
  app.set("db", db)
  console.log("db is running!")
  app.listen(SERVER_PORT, () => console.log(`cruising on port ${SERVER_PORT}`))
})
