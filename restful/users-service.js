var express = require('express');
var app = express();
var fs = require('fs');

var jsonPath = __dirname + '/' + 'users.json';

app.get('/listUsers', function(req, res) {
    readJSONFromFile(jsonPath, function(data) {
        res.end(data);
    });
});

app.post('/addUser', function (req, res) {
    readJSONFromFile(jsonPath, function(data) {
        data = JSON.parse(data);
        data['user4'] = user['user4'];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

// get request with parameter first way
app.get('/users/:id', function (req, res) {
    readJSONFromFile(jsonPath, function(data) {
        users = JSON.parse(data);
        try {
            var user = users['user' + req.params.id];
            console.log(user);
            res.end(JSON.stringify(user));
        } catch (error) {
            res.end('error');
        }
    });
});

// get request with parameter second way
app.get('/users', function (req, res) {
    readJSONFromFile(jsonPath, function(data) {
        try {
            var userId = req.query['userId'];
            var user = users['user' + userId];
            console.log(user);
            res.end(JSON.stringify(user));
        } catch (error) {
            res.end('error');
        }
    });
});

app.delete('/deleteUser', function (req, res) {
    readJSONFromFile(jsonPath, function(data) {
        data = JSON.parse(data);
        delete data["user" + 2];
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
});

function readJSONFromFile(filePath, onReadSuccess) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            throw(err)
        } else {
            onReadSuccess(data);
        }
    });
}