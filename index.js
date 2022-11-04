const express = require("express");
const app = express(),
  port = 8080;
app.listen(port, () => console.log(`Server listen at ${port}`));
app.all("*", (req, res) => res.send("hello world!"));
