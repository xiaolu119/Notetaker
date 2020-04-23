var route = require("express").Router();
var path = require("path")
route.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname,"../public/notes.html"));
})
// route.get("*", function(req, res){
//     res.sendFile(path.join(__dirname,"../public/index.html"));
// })
module.exports = route
