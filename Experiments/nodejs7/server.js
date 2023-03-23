const http = require('http');

// Create a data function
const data = (req, res) => {
    res.write('Hello World');
    res.end();
}
 

// Create a server object

http.createServer(data).listen(4500);