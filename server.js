const express = require("express");
const htmlroute = require("./route/htmlroute");
const apiroute = require("./route/apiroute");
var PORT = process.env.PORT || 8080;

const app = express("");
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/", htmlroute);
app.use("/api", apiroute);


app.listen(PORT,() => {
    console.log ("serverlisening", PORT)
});