var express = require('express');
var path = require('path');
// var bodyParser = require('body-parser');
var app = express();

var rootPath = path.normalize(__dirname + '/../');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname +  + 'Task/app'));
app.use('/js', express.static(__dirname + 'Task/app/js'));
app.use('/js', express.static(__dirname + 'Task/app/controllers'));


app.use(express.static(rootPath + 'Task/app'));
app.get('/*', function(req, res) {
    res.sendFile(rootPath + 'Task/app/index.html');
});


 // app.use('/home/*', require('./routes/api.js'));

app.listen(3000);
console.log('run');
