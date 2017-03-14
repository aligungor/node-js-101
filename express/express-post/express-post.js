var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var userArray = [];

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/', express.static(__dirname + '/public'));
app.get('/express-post.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "express-post.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name
   };
   //console.log(response);
   //res.end(JSON.stringify(response));
   userArray.push(response);
   res.end(JSON.stringify(userArray));
   console.log(userArray);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})