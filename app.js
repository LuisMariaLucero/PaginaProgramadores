const express = require("express")
const app = express()

app.listen(3030,()=>console.log("Servidor 3030 creado con exito"));

const path = require("path");

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/babbage', function(req, res){
    res.sendFile(path.join(__dirname, '/views/babbage.html'));
});

app.get('/berners-lee', function(req, res){
    res.sendFile(path.join(__dirname, '/views/berners-lee.html'));
});

app.get('/clarke', function(req, res){
    res.sendFile(path.join(__dirname, '/views/clarke.html'));
});

app.get('/hamilton', function(req, res){
    res.sendFile(path.join(__dirname, '/views/hamilton.html'));
});

app.get('/hopper', function(req, res){
    res.sendFile(path.join(__dirname, '/views/hopper.html'));
});

app.get('/lovelace', function(req, res){
    res.sendFile(path.join(__dirname, '/views/lovelace.html'));
});

app.get('/turing', function(req, res){
    res.sendFile(path.join(__dirname, '/views/turing.html'));
});

const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath)); // si la carpeta public tendria q ir por fuera de src, como iria esto? // Solucionado!

