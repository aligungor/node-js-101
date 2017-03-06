const path = require('path');
var fs = require('fs');

// input.txt's directory
var filePath = path.join(path.dirname(fs.realpathSync(__filename)), '/input.txt');

var data = fs.readFileSync(filePath);

console.log(data.toString());
console.log("Program Ended");