var t = "better callback example than tutorialspoint";

callback(t, function() {
    console.log('onTextLogged callback on the road');
});

callbackData(t, function(data) {
    console.log(data);
});

function callback(text, onTextLogged) {
    // you can do db operations, file read etc. here
    console.log(text);
    onTextLogged();
}

function callbackData(text, onTextLogged) {
    // you can do db operations, file read etc. here
    console.log(text);
    onTextLogged('text logged. are you happy?');    
}