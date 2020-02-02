var express = require('express');
// var bodyParser = require('body-parser');
var mysql = require('mysql');

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'product',
})

connection.connect(function (error) { 
    if(!!error){
        console.log('Error');
    }else{
        console.log('Connected');
    }
 });

var app = express();

app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/cart',function(req, res){
    res.sendFile(__dirname + "/cart/cart.html");
});

app.post('/cart', function (req, res) {
    connection.query("SELECT * FROM product", function (error, rows, fields) { 
        if(!!error){
            console.log('Error in query');
        }else{
            res.json(rows);
        }
     });
});

app.get('/shipping',function(req, res){
    res.sendFile(__dirname + "/shipping/shipping.html");
});

// app.post('/shipping', urlencodedParser, function(req, res){
//     res.sendFile(__dirname + "/shipping/shipping.html");
//     if(!req.body) return res.sendStatus(400);
//     console.log(req.body);
// });

app.use(express.static(__dirname));

connection.query("SELECT * FROM product", function (error, rows, fields) { 
    if(!!error){
        console.log('Error in query');
    }else{
        console.log("Success");
    }
 });


app.listen(3000);
