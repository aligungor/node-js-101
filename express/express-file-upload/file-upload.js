var express = require('express');
var multer  = require('multer');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/file_upload', function(req, res){
    res.sendFile(__dirname + "/public/file_upload.htm" );
});

// create multer object to handle multipart/form-data
var upload = multer({ dest: 'uploads/' });

// upload.any() gets all files in request
// if want to read specific input use upload.single(fieldName)
// and do not use for loop. eg; upload.single('file')
app.post('/file_upload', upload.any(), function(req, res, next) {

    for (var index in req.files) {
        var fileName = req.files[index].originalname; // uploaded file name
        var filePath = req.files[index].path; // uploaded file path
        var destination = req.files[index].destination;
        var destinationPath = __dirname + "/" + destination; // path to copy
        var file = destinationPath + fileName; // final path
        
        // create destionation path if not exist
        if (!fs.existsSync(destinationPath)){
            fs.mkdirSync(destinationPath);
        }

        // read file from source path
        fs.readFile(filePath, function (err, data) {
            // write file to the destination path
            fs.writeFile(file, data, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    response = {
                        message:'File uploaded successfully',
                        filename:fileName
                    };
                }
            console.log(response);
            res.end(JSON.stringify(response));
            });
        });
    }
    res.send();
});

app.listen(8081);