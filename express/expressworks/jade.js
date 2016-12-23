var express = require('express');
var jade = require('jade');
var app = express()
const path = require('path');




app.set('view engine', 'jade');
app.set('views', process.argv[3]);
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});


app.listen(process.argv[2])
