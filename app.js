/**
 * Module dependencies.
 */

'use strict';
var path = require('path');
var express = require('express');
var bodyparser = require('body-parser'),
  cookieParser = require('cookie-parser');

var app = express();

app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));

// app.get('/', routes.index);
// app.get('/users', user.list);
require('./routes/index')(app);

var http = require('http').Server(app);
http.listen(3000, function(){
  console.log('listening on *:3000');
});
