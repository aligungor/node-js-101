const path = require('path');
var fs = require("fs");
var zlib = require('zlib');

var fileOutput = path.join(path.dirname(fs.realpathSync(__filename)), 'output.txt');
var fileZip = path.join(path.dirname(fs.realpathSync(__filename)), 'input.txt.gz');

// Decompress the file input.txt.gz to input.txt
fs.createReadStream(fileZip)
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream(fileOutput));
  
console.log("File Decompressed.");