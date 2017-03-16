const fs = require('fs');
const child_process = require('child_process');
const path = require('path');

var fileSupport = path.join(path.dirname(fs.realpathSync(__filename)), '/support.js');
 
for(var i=0; i<3; i++) {
   var worker_process = child_process.fork(fileSupport, [i]);	

   worker_process.on('close', function (code) {
      console.log('child process exited with code ' + code);
   });
}