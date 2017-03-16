const fs = require('fs');
const child_process = require('child_process');
const path = require('path');

var fileSupport = path.join(path.dirname(fs.realpathSync(__filename)), '/support.js');

for(var i = 0; i < 3; i++) {
   var workerProcess = child_process.exec('node ' + fileSupport + ' ' +i, function 
      (error, stdout, stderr) {
      
      if (error) {
         console.log(error.stack);
         console.log('Error code: '+error.code);
         console.log('Signal received: '+error.signal);
      }
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
   });

   workerProcess.on('exit', function (code) {
      console.log('Child process exited with exit code '+code);
   });
}