const fs = require('fs');
const child_process = require('child_process');
const path = require('path');

var fileSupport = path.join(path.dirname(fs.realpathSync(__filename)), '/support.js');

for(var i = 0; i < 3; i++) {
   var workerProcess = child_process.spawn('node', [fileSupport, i]);

   workerProcess.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
   });

   workerProcess.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
   });

   workerProcess.on('close', function (code) {
      console.log('child process exited with code ' + code);
   });
}