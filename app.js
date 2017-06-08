var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var config = require('./config');
var app = express();
const port = config.server_port;
const server_name = config.server_name;
const mongodb_server = config.mongodb.server_name;
const mongodb_port = config.mongodb.port;

const route = require('./routes/route');
//adding middleware
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));

mongoose.connect("mongodb://" + mongodb_server + ":" + mongodb_port + "/questionaire");

mongoose.connection.on('connected',()=>{
  console.log('Connected to the Database mongodb @ ');
});

mongoose.connection.on('error',(err)=>{
  if (err)  { console.log(err); }
});


app.use('/api/v1', route);

app.listen(port,()=>{
  console.log('Server started at port: ' + port);
});
