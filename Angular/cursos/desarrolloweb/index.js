var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
app.use(bodyParser());
console.log('ready');

app.use(express.static(__dirname + '/client'));

app.get('/api/pub/maestros', function(req,res,next){
    var maestros = {
        categoriasIngresos: ['Nomina', 'Ventas','Intereses Depositos'],
        categoriasGastos: ['Hipoteca','Compras','Impuestos']
    };
    res.json(maestros);
});

app.route('/api/priv/movimientos').get(function(req,res,next){
    //acceso a mongo
    MongoClient.connect("mongodb://localhost:27017/supercuentas",function(err,db){
        if(!err){
            var collection = db.collection('movimientos');
            var movimientos = [];
            collection.find().toArray(function(err,movimientos){
                res.json(movimientos);
            });
        } else{
            console.log(error);
        }
    });
}).post(function(req, res, next){
    var reqBody = req.body;
    var movimiento ={
        importe: reqBody.importe,
        fecha: reqBody.fecha,
        tipo: reqBody.tipo,
        categoria: reqBody.categoria
    };
    MongoClient.connect("mongodb://localhost:27017/supercuentas",function (err,db){
        if(!err){
            var collection = db.collection('movimientos');
            collection.insert(movimiento, function(err,result){
                
                if(!err){
                    res.status(200);
                }else{
                    console.log(error);
                }
            });
        } else{
            console.log(error);
        }
    });
});

app.get('/test',function(req, res, next){
    res.send('<h1>Flujo de caja</h1><p>NodeJS y Express funcionan</p>');
});

console.log('steady');
app.listen(3000);
console.log('go');