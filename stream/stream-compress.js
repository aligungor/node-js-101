const path = require('path');
var fs = require("fs");
var zlib = require('zlib');

var fileInput = path.join(path.dirname(fs.realpathSync(__filename)), '../input.txt');
var fileZip = path.join(path.dirname(fs.realpathSync(__filename)), 'input.txt.gz');

// Compress the file input.txt to input.txt.gz
fs.createReadStream(fileInput)
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream(fileZip));
  
console.log("File Compressed.");