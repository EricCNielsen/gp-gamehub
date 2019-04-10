require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  ctrl = require("./controller/controller"),
  aws = require('aws-sdk');

const app = express(),
  { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env;

app.use(express.json());

app.get('/api/signs3', (req, res) => {
  aws.config = {
    region: 'us-west-1',
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  };

  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read',
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    return res.send(returnData);
  });
});

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is dbing");
  app.listen(SERVER_PORT, () => console.log(`bang on port ${SERVER_PORT}`));
});