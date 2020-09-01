const express = require("express");
const app = express();

const getAPI = require("./Router/get");

app.use("/", getAPI);
app.use(express.static("client"));
function server(PORT) {
  app.listen(PORT, console.log(`PORT IS RUNNING ON ${PORT}` || 9090));
}

server(8080);
