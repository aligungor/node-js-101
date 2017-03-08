const path = require('path');
var fs = require("fs");

// output.txt's directory
var filePath = path.join(path.dirname(fs.realpathSync(__filename)), '/output.txt');

var data = 'test text to write 12 23 asd üüşğü şüÖÇzcİi';

// Create a writable stream
var writerStream = fs.createWriteStream(filePath);

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");