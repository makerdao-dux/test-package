var static = require("node-static");

//
// Create a node-static server instance to serve the './dist' folder
//
var file = new static.Server("./dist");

console.log('RUNNING!: Access http://localhost:8080 to continue.')
require("http")
  .createServer(function (request, response) {
    request
      .addListener("end", function () {
        //
        // Serve files!
        //
        file.serve(request, response);
      })
      .resume();
  })
  .listen(8080)
