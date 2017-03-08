const path = require('path');
var fs = require("fs");

// input.txt's directory
var filePath = path.join(path.dirname(fs.realpathSync(__filename)), '/input.txt');

var data = '';

// Create a readable stream
var readerStream = fs.createReadStream(filePath);

// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error

// data event fired when there is data available to read
readerStream.on('data', function(chunk) {
   data += chunk;
});

// end event fired when there is no more data to read
readerStream.on('end',function(){
   console.log(data);
});

// error event fired when all the data has been flushed to underlying system
readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");