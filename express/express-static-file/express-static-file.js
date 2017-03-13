var express = require('express');
var app = express();

// make "public" folder public
// allows to access folders inside "public"" folder
app.use('/', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
   res.send('Hello World');
});

console.log(__dirname);

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;

   console.log("Example app listening at http://%s:%s", host, port);
});

// then write 
// http://localhost:8081/images/galatasaray.jpg
// to your browser and go!