const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());

const conn = require("./db/conn");

conn();

const routes = require("./routes/router");

app.use("", routes);

app.listen(3000, function () {
  console.log("server is on");
});
