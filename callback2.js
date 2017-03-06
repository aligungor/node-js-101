const path = require('path');
var fs = require('fs');

// input.txt's directory
var filePath = path.join(path.dirname(fs.realpathSync(__filename)), '/input.txt');

fs.readFile(filePath, function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");