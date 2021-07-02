const express = require("express");
const path = require("path");
const fs = require("fs");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.use(express.static("build"));
app.use(express.static("build"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});
router.get("/another", (req, res) => res.json({ route: req.originalUrl }));
router.post("/", (req, res) => res.json({ postBody: req.body }));

app.use("/.netlify/functions/index", router); // path must route to lambda

module.exports.handler = serverless(app);
