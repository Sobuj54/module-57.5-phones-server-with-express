const express = require("express");
const phones = require("./phones.json");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("phones server changed again");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:Id", (req, res) => {
  const id = parseInt(req.params.Id);
  const phone = phones.find((phone) => phone.id === id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log("port :", port);
});
