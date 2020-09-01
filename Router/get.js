const express = require("express");
const app = express();
const router = express.Router();

const { Github } = require("../classes/api");
const github = new Github();

app.use("/api", async (req, res) => {
  try {
    const foo = await github.getUser();
    res.send(foo);
    console.log(foo);
  } catch (error) {}
});
module.exports = router;
