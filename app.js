var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();
const port = 3000;
const route = require('./routes/route');
//adding middleware
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));

mongoose.connect('mongodb://localhost:27017/questionaire')

mongoose.connection.on('connected',()=>{
  console.log('Connected to the Database mongodb @ 27017');
});

mongoose.connection.on('error',(err)=>{
  if (err)  { console.log(err); }
});


app.use('/api/v1', route);

app.listen(port,()=>{
  console.log('Server started at port: ' + port);
});
