var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var config = {
    user: 'vapoorve',
    database: 'vapoorve',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD

};
var app = express();
app.use(morgan('combined'));
////////////////////////////// intro for body //////////////////////////////////////

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
//////////////////////////////// test parameter /////////////////////////////////////////////////
app.get('/test',function(req,res){
    res.send("this is test parameteros");
});
////////////////////////////// test - db //////////////////////////////////////////
var pool = new Pool(config);
app.get('/test-db',function(req,res){
    pool.query('SELECT * FROM test',function(err,result){
        if(err){
            res.status(500).send(err.tostring());
        }else{
            res.send(JSON.stringify(result.rows));
        }
    });
});
//////////////////////////////////////////////////////////////////////////////////////
app.get('/artical-1',function(req,res){
    res.sendFile(path.join(__dirname,'ui','artical-one.html'));
});
//////////////////////////////////////////////////////////////////////////////////////
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
