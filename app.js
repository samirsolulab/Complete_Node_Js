const http = require('http');
const routes = require('./routes');

console.log(routes.someText); 

const server = http.createServer();
server.listen(3000);