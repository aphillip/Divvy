var express = require('express');
var app = express();
var path = require('path');
var config = require("./routes/config.js");
var serveIndex = require('serve-index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

var index = require('./routes/index');
app.use('/',index);
app.use('/uploads', serveIndex('public/uploads', {'icons': true}));



var server = app.listen(config.port, function(){
  console.log('Server listening on port ' + config.port);
});
