// Charge les modules
var express=require('express');
var port=4444;
var app=express();
const fs = require('fs')

// Définit les vues
app.set('view engine', 'ejs');
var currentdate = new Date();

// Check la date et l'heure
let year = currentdate.getFullYear().toString()
let month = currentdate.getMonth().toString()
let day = currentdate.getDay().toString()
let hours = currentdate.getHours().toString()
let minutes = currentdate.getMinutes().toString()

//Créer les routes et les rendus
app.get("/", function (req, res) {
    res.render('home',{title: "Welcome on my site!"});
}).get("/news/", function (req, res) {
    let date = 'nous somme le ' + year + '/' + month + '/' + day + " et l'heure actuelle est : " + hours + ":" + minutes
    let auteur = 'Pierre Pinto de Oliveira'
    let rawdata = fs.readFileSync('articles.json');
    let articles = JSON.parse(rawdata);
    console.log(articles);
    res.render('news3', { auteur: auteur, date: date, articles: articles});
}).listen(port, function () {
    console.log('Listening on port '+port+'...');
}); 