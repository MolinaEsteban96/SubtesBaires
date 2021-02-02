const express = require("express");
const path = require("path");
const fetch = require("node-fetch");

const app = express();

app.use(express.static(__dirname + '/static'));

app.get("/",(req,res) => {
    
    res.sendFile(path.join(__dirname + '/views/index.html'));
})

app.get("/api",(req,res) => {

    var jsonResponse = [];

    fetch("https://apitransporte.buenosaires.gob.ar/subtes/forecastGTFS?client_id=79aa2000e2d746289ff16223a380c8c8&client_secret=f846a617aba146f18F664d19c6f877b0")
    .then(res => res.json())
    .then(data => {
        
        jsonResponse = data.Entity;
        console.log(jsonResponse);
        res.json(jsonResponse);
    })
})

app.listen(3000,() => {

    console.log("Listen on port 3000");
})
