const express = require("express");
const app = express();

const getAPI = require("./Router/get");
app.use(express.static("client"));


app.use("/", getAPI);
function server(PORT) {
  app.listen(PORT, console.log(`PORT IS RUNNING ON ${PORT}` || 9090));
}

server(8080)
