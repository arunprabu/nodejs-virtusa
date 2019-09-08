var events = require('events'); // Import events module
var fs = require("fs");

var eventEmitter = new events.EventEmitter(); // Create an eventEmitter object

//global setup 
// Bind the data_received event with the callback
eventEmitter.on('data_received', function( err, data){
    console.log('DATE RECEIVED successfully.');
    console.log(data.toString());
});

//creating custom event -- registering 
eventEmitter.on("open_connection", function(){
    console.log('CONNECTION OPENED successfully.');

    fs.readFile( "test.txt", function(error, data){
        console.log(data.toString());

        eventEmitter.emit("data_received", error, data);
    });

    console.log("Inside Open Connection");

});

//custom event should be emitted. so that the callback will be called.
eventEmitter.emit("open_connection" );

