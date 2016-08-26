var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
app.use(bodyParser());
console.log('ready');

app.use(express.static(__dirname));

console.log('steady');
app.listen(3000);
console.log('go');