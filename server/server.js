var express = require('express');
var app = express();
var index = require('./routes/index.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var hero = require('./routes/createRoute');
//config
app.use(express.static('server/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//mongo
var mongoURI = 'mongodb://localhost/super_hero_list';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('Error connecting to MongoDB', err);
})
MongoDB.once('open', function(){
  console.log('MongoDB started');
})
//Routes
app.use('/', index);
app.use('/hero', hero);


//Server
var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
})
