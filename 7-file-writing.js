var fs = require("fs");
var events = require("events");

var eventEmitter = new events.EventEmitter();

eventEmitter.on("read_operation_over", () => {
    console.log("Read Operation Over");
});

eventEmitter.on("read_file", () => {
    fs.readFile("arun.txt", (error, data) => {
        console.log(data.toString());
        eventEmitter.emit("read_operation_over");
    });
});

fs.writeFile("arun.txt", "Hello", (error, data) => {
    console.log("File writing Successfull");
    
    eventEmitter.emit("read_file");
});

//Todo: 
//1 . Emit custom event to read the newly created file's data 
//2. Chain one more custom event and upon emitting it,
    // print the msg 'read operation over' 
