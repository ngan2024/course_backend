
const 
    port= (process.argv[2] || process.env.port || 3000),
    http = require('http');

http.createServer((req, res) => {
    console.log(req.url);

    res.statusCode = 200;
    res.setHeader(`Content-Type`, `text/html`);
    res.end(`<p> Hello World ABC 12456 </p>`);

}).listen(port);

console.log(`Server is running at http://localhost:${port}/`);
