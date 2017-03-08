console.log('everyday im buffering')

// to create buffer of 10 octets
var buf1 = new Buffer(10);
console.log(buf1);

// buffer from given array
var buf2 = new Buffer([10, 20, 30, 40, 50]);
console.log(buf2);

// buffering utf-8 string
var buf3 = new Buffer("learning node.js", "utf-8");
console.log(buf3);

// writing into a buffer 
var buf4 = new Buffer(256);
len = buf4.write("noob.js");
console.log("Octets written : "+  len);

// reading from a buffer
// buf(string, start,end)
var buf5 = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf5[i] = i + 97;
}
console.log(buf5);
console.log(buf5.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log(buf5.toString('ascii', 0, 5));   // outputs: abcde
console.log(buf5.toString('utf8', 0, 5));    // outputs: abcde
console.log(buf5.toString(undefined, 0, 5)); // encoding defaults to 'utf8', outputs abcde
console.log(buf5.toString('utf8', 3, 5));   // outputs: de

// converting buffer to JSON
var buf6 = new Buffer('convert me');
var json = buf6.toJSON(buf6);
console.log(buf6);
console.log(json);

// concatenating buffers
var buffer1 = new Buffer('a, b, c');
var buffer2 = new Buffer(', d, e, f');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("buffer1 content: " + buffer1.toString());
console.log("buffer2 content: " + buffer2.toString());
console.log("concatenated buffer3 content: " + buffer3.toString());

// comparing buffers
var b1 = new Buffer('xyz');
var b2 = new Buffer('xyzt');
var b3 = new Buffer('xyz');
var b4 = new Buffer('yzt');
var buffersArray = [b2, b3, b4];
for (i = 0; i < buffersArray.length; i++) {
  var result = b1.compare(buffersArray[i]);
  if (result < 0) {
    console.log(b1 +" comes before " + buffersArray[i]);
  } else if (result == 0) {
    console.log(b1 +" is same as " + buffersArray[i]);
  } else {
    console.log(b1 +" comes after " + buffersArray[i]);
  }
}

// copying a buffer
var bufferToCopy = new Buffer('ABC');
var newBuffer = new Buffer(bufferToCopy.length);
bufferToCopy.copy(newBuffer);
console.log("newBuffer's content: " + newBuffer.toString());

// slicing a buffer
var bufferToSlice = new Buffer('abcdefghi');
var slice1 = bufferToSlice.slice(0, 4);
var slice2 = bufferToSlice.slice(4, bufferToSlice.length);
console.log("buffer to slice : " + bufferToSlice.toString());
console.log("slice 1 :" + slice1.toString());
console.log("slice 2 :" + slice2.toString());