//this is not used anywhere -- but an explainer for calling third party api from express js.

exports.getThirdPartyData = function(){
    // call third party api 
    //Example: send mail 
    //1. complete mailing configurations
    //2. what should be mailed, to whom
    //3. send mail ... have a callback registered.. wait for resp 
        //3.1 you should fire callback 
        //3.2 channelise it to the router


    //Example Calling Third party API URL 
    //1. http client  example: var request = require('request'); // you can also use axios
    //2. api url 
    //3. call the api url using http client 
        //3.1 listen to response 
        //3.2 channelise it to the router   
}