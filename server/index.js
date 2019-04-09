require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  ctrl = require("./controller");

const app = express(),
  { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(exress.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is dbing");
  app.listen(SERVER_PORT, () => console.log(`bang on port ${SERVER_PORT}`));
});
