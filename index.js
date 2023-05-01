const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("phones server changed again");
});

app.listen(port, () => {
  console.log("port :", port);
});
