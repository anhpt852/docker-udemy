const path = require("path");

const express = require("express");

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "views", "index.html");
  res.sendFile(filePath);
});

app.listen(80);
