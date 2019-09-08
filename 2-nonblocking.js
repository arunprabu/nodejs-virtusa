//How JS in NodeJS side is Async? 
var fs = require("fs"); //importing filesystem

// non blocking io 
fs.readFile("test.txt", (error, data) => { //error first callback
    if(!error){
        console.log(data.toString());
    }else{
        console.log("=====");
        console.log(error);
    }
} );

//the following line will get executed first while fs is reading the file
console.log("Program Ended");

