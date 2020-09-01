const express = require("express");
const app = express();

const get = require("./Router/get");

app.get("/", get);

function server(PORT) {
  app.listen(PORT, console.log(`PORT IS RUNNING ON ${PORT}` || 9090));
}

server(8080);
