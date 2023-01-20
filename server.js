//Creating a simple web server
const http = require('http')

//Routing
const url = require('url')

//Creating Server
const server = http.createServer((req, res) => {
    const pathway = req.url

    //Routing
    if(pathway === '/' || pathway === '/overview'){
        res.end("This is the overview")
    } else if(pathway === '/product'){
        res.end("This is the product")
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': "Hello NodeJs"
            
        })
        res.end('<h1>Page not found!</h1>')
    }
    res.end("Hello from the server")
})

server.listen(3000, '127.0.0.1', () => {
    console.log("Listening to requests on port 3000")
})

 