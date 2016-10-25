var express = require('express');
var path = require('path');
var app = express();

var rootPath = path.normalize(__dirname + '/../');
app.use('/js', express.static(__dirname + 'Task/app/js'));
app.use('/js', express.static(__dirname + 'Task/app/controllers'));
app.use(express.static(rootPath + 'Task/app'));
app.get('/*', function(req, res) {
    res.sendFile(rootPath + 'Task/app/index.html');
});
app.listen(3000);
console.log('App is runing on port 3000');
