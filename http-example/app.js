//Developing SSR apps in NodeJS
var http = require('http');

var homeTemplate = `
<html>
<head>
    <title>My First Node JS Server based app!</title>    
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    
</head>
<body>
    <h1>Welcome to my app!</h1>

    <hr>
    <p>This is SSR app</p>
</body>
</html>`;

http.createServer( (req, res) => {
    console.log(req.url); // handle req

    //planning to send res with res header 
    res.writeHead(200, {"Content-Type": "text/html"});

    switch(req.url){   // Routes
        case '/':
             // res.end will end the connection b/w client n the browser
            res.end(homeTemplate);  
            break;
        case '/about':
            // res.end will end the connection b/w client n the browser
            res.end(
            `<html>
                <head>
                    <title>My First Node JS Server based app!</title>    
                </head>
                <body>
                    <h1>Welcome to About Page</h1>
                </body>
            </html>`);
            break;
        
        default: 
            //planning to send res with res header 
            res.writeHead(404, {"Content-Type": "text/html"});

            res.end(
                `<html>
                    <head>
                        <title>My First Node JS Server based app!</title>    
                    </head>
                    <body>
                        <h1>404 - page not found</h1>
                        <a href="/">Go to home Page</a>
                    </body>
                </html>`);
    }
    
}).listen(3000);


