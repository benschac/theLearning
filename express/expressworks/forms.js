var express = require('express');
// var jade = require('jade');
var app = express()
// const path = require('path');
var bodyparser = require('body-parser')

//
app.use(bodyparser.urlencoded({extended: false}))
// app.set('view engine', 'jade');
// app.set('views', process.argv[3]);
// app.post('/path', function(req, res){
//   req.body.str.split('').reverse().join('')
// })




app.post('/form', function(req, res){
  res.send(req.body.str.split('').reverse().join(''));

})

app.listen(process.argv[2]);
