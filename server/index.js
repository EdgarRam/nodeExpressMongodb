var express = require('express')
var express = require('express')

var app = express();

app.set('view engine', 'pug')

app.get('/', function( req, res){
  res.render( 'index' )
})

app.get('/:nombre', function( req, res){
  console.log(req.params);

  res.send( 'index' )
})

app.listen( 8000)
