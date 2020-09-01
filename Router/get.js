const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const { Github } = require("../classes/api");
const github = new Github();

const foo = github.getUser();

router.get("/12", async (req, res) => {
  const foo = await github.getUser();
  if (foo.message == "Not Found") {
    res.status(404).send("ApI Error");
    return;
  }
  /**********************************/
  res.send(foo);
});

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../client/index.html"));
});
module.exports = router;
