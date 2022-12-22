var static = require('node-static');
const path = require('path');

//
// Create a node-static server instance to serve the './web' folder
//
var file = new static.Server(path.join(__dirname, 'web'));

require('http')
  .createServer(function (request, response) {
    request
      .addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
      })
      .resume();
  })
  .listen(8080, 'localhost', () => {
    console.log('RUNNING!: Access http://localhost:8080 to continue.');
  });
