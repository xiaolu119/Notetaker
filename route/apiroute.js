var route = require("express").Router();
var fs = require("fs");
var db =[]
// var db = require("../db/db.json")
route.post("/notes",function(req,res){
    console.log("Data from front end",req.body)
    let record = {
        id: db.length,
        title: req.body.title,
        text: req.body.text
    }
    db.push(record)
    fs.writeFileSync('./db.json', JSON.stringify(db), function(err) {
        if(err){
        console.log (err)
        }
        console.log("Data in DB",db)
        res.json(db)
    })
    res.json(db)
})


route.get("/notes/", function(req, res){
    // res.send((db))  
  db = JSON.parse(fs.readFileSync("./db.json","utf8"))
console.log("Rout GET",db)
res.json(db)
//   fs.readFileSync('./db.json', function(err,data) {
//     if(err){
//     console.log (err)
//     }
//     console.log("Data in DB",data)
//     res.json(data)
// })
})
route.delete("/notes/:id", function(req, res){
    console.log("Delete",req.params.id)
    var notes =[]
    for(let i=0;i < db.length;i++){
        console.log(db[i].id,req.params.id)
        if(parseInt(db[i].id) !== parseInt(req.params.id)){
            notes.push(db[i])
        }
    }
    db = notes
    console.log("New array",notes)
    fs.writeFileSync('./db.json', JSON.stringify(notes), function(err) {
        if(err){
        console.log (err)
        }
        console.log("Data in DB",db)
        res.json(db)
    })

})
module.exports = route
