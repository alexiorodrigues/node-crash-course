const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  // lodash
  const num = _.random(0, 200);
  console.log(num);

  const greet = _.once(() => {
    console.log('hello');
  });

  greet();

  // Request object
  //console.log(req.url, req.method);

  // Response object

  // set header content type

  // -> Manually return something to the client
  //   res.setHeader('Content-Type', 'text/html');
  //   res.write('<p>hello, ninjas</p>');
  //   res.write('<p>hello, ninjas</p>');
  //   res.write('<p>hello again, ninjas</p>');
  //   res.end();

  // -> Send a HTML file
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;

    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;

    // Redirect
    case '/about-bla':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;

    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);

      // -> res.write is not necessary if you just return one thing,
      //    you can add it to the res.end(data)

      res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
