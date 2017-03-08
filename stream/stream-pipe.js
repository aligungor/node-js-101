const path = require('path');
var fs = require("fs");

// Create a readable stream
var inputFile = path.join(path.dirname(fs.realpathSync(__filename)), '../input.txt');
var readerStream = fs.createReadStream(inputFile);

// Create a writable stream
var outputFile = path.join(path.dirname(fs.realpathSync(__filename)), '/output.txt');
var writerStream = fs.createWriteStream(outputFile);

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");