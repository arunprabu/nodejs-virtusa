//How JS is sync? 
var fs = require("fs"); //importing filesystem

//read file synchronously - so it is blocking i/o
var data = fs.readFileSync('test1.txt'); 

//will be printed first
console.log(data.toString()); 

//will be printed at last as the program runs line by line and char by char
console.log("Program Ended"); 

