

//getting started


//basic web servers

// const http = require('http');

// const server = http.createServer((req, res) => {

//   res.statusCode = 200;
//   res.setHeader('content-Type', 'text/html');

//   res.end('hello world');


// });


// server.listen(3000, '0.0.0.0', () => {
//   console.log('server is up and running...')
// })

const { v4: uuidv4 } = require('uuid')


console.log(uuidv4());

console.log("hello world")