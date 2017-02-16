var express = require('express')
var bodyParser = require('body-parser')

var app = express();

app.use( '/public', express.static('public') );

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended:true}) );

app.set('view engine', 'pug');

app.get('/', function( req, res){
  res.render( 'index' )
})

app.get('/login', function( req, res){
  res.render( 'login' )
})

app.post('/users', function( req, res){
  console.log(req.body.password);
  console.log(req.body.email);
  res.send('datos recibidos')
})


app.listen( 8000)
