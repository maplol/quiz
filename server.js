const express = require("express"),
  app = express(),
  exphbs = require("express-handlebars");

const routes = require("./routes/index");

app.listen(3000);

app.use(express.static("public"));

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
  })
);
app.set("view engine", "handlebars");

app.use("/", routes);
