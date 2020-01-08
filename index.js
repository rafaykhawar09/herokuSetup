
var express = require("express");

var app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
     res.send("Welcome to my API!");
});

app.get("/spinach", (req, res) => {

     res.json({
          name: "spinach",
          bestFood: true
     })
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));