const express = require('express');  // We load ‘express’ | ('http') = We load ‘http’ 
var app = express();

var path = require('path');

// FOR DATA
function pet (name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
}

function petArr() {
    var petsArray = [];
    petsArray.push(new pet("Oliver", 9, "Cat"));
    petsArray.push(new pet("Kovu", 10, "Cat"));
    return petsArray;
   }


// INDEX
// Index page that links to all the other pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/hello.html'))
   });

// INFO
// A page that displays html info about your 'pets'
app.get('/info', (req, res) => {
    res.sendFile(path.join(__dirname + '/info.html'))
   });

// PICTURES
// A page that hosts multiple pictures of your 'pets'
app.get('/pictures', (req, res) => {
    res.sendFile(path.join(__dirname + '/pictures.html'))
   });

app.use('/public', express.static('public'))

// DATA
// A page that returns a json object of 'pet' info
app.get('/data', (req, res) => {
    res.json(petArr())
});

app.listen(process.env.PORT || 8080)