//arguments vector in process 
var whatIsArgV = process.argv;
console.log(whatIsArgV);

var nodeRuntime = process.argv[0];
console.log(nodeRuntime);

var ourApp = process.argv[1];
console.log(ourApp);

//any commands we try can be caught in argv array 
//to run try the following and understand
//node process.js dev --port=8080 

var myCmd = process.argv[2];
console.log(myCmd); //outputs: dev

console.log("====Now let'se see it in yargs =====");
//Alternative
const yargs = require('yargs');
console.log(yargs.argv);