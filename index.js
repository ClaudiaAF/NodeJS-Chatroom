const http = require('http');
const queryString = require('querystring');
const server = http.createServer();
const fs = require('fs');
const template = require ('es6-template-strings');
var contacts = []

var handleFormGet = function(request, response) {
 response.writeHead(200, {"Content-Type": "text/html"});
 fs.readFile('template/form.html', 'utf8', function(err, data){
   if (err) { throw err; }
   response.write(data)
   response.end(); 
 })
};

var handleFormPost = function(request, response){

  var bodyString = '';
  request.on('data', (data) => {
    console.log('Data ${data}')
    bodyString += data;
    console.log ('Body: ${bodyString}')
  });

  request.on ('end', function() {
    console.log('END: ${bodyString}')
    var post = queryString.parse(bodyString);
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('template/contacts.html', 'utf8', (err, data) => {
      if (err) { throw err }
      var values = {
        username: post ['username'],
        lastName: post ['lastName']
      }
      var compiled = template(data, values);
      response.write(compiled);
      response.end()
    })  
  });

}


server.on("request", function(request, response) {
  if ('GET' === request.method) {
    handleFormGet(request, response);
  } else if ('POST' === request.method) {
    handleFormPost(response, request);
  } else {
  response.writeHead(404);
  response.end();
  }

});


server.listen(8888, function(){
  console.log('Listening on port 8888...');
 });