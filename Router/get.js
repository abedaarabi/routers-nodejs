const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const { Github } = require("../classes/api");
const github = new Github();



router.get("/api", async (req, res) => {
  const urlGit= 
`https://api.github.com/users/${1000000000}?client_id=${
  this.client_id
}&client_secret=${this.client_secret}`
  const foo = await github.getUser(urlGit);
  if (foo.message == "Not Found") {
    res.status(404).send("ApI Error");
    return;
  }else{console.log(foo);
    res.send(foo);
}
  /**********************************/
});

router.get("/33", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../client/index.html"));
});
module.exports = router;
