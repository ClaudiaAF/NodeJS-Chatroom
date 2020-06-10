const http = require('http');
const queryString = require('querystring');
const server = http.createServer();
const fs = require('fs')
const template = require ('es6-template-strings');
const contacts = []

var bodyString = '';

var simpleRouter = (request) => {
    var method = request.method;
    var path = request.url;
    var queryIndex = request.url.indexOf('?');
    if (queryIndex > 0) {
        path = request.url.slice(0, queryIndex)
    }
    var suppliedRoute = {method: method, path: path};
    var routes = [
        {method: 'GET', path: '/', handler: handleFormGet},
        {method: 'POST', path: '/', handler: handleFormPost},
        {method: 'GET', path: '/profile', handler: handleLoginGet}
    ];
    for (let i = 0; i < routes.length; i++) {
        var route = routes[i]
        if (route.method === suppliedRoute.method && route.path === suppliedRoute.path) {
            return route.handler;
        }
    }
    return null;
}


var handleFormGet = function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('template/form.html', 'utf8', function(err, data) {
      if (err) { throw err; }
      response.write(data);
      response.end(bodyString);
    });
  };

  var handleLoginGet = function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('template/profile.html', 'utf8', function(err, data) {
      if (err) { throw err; }
      response.write(data);
      response.end(bodyString);
    });
  };

var handleFormPost = (request, response) => {
    
    response.writeHead(200, {"Content-Type": "text/html"});
    var bodyString = '';
    request.on('data', function (data) {
    bodyString += data;

    });

    request.on('end', function () {
    var post = queryString.parse(bodyString);
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('template/contacts.html', 'utf8', (err, data) => {
        if (err) { throw err }
        var values ={
            username: post['username'], 
            surname: post['surname'] 
        }
            ;

        var compiled = template(data, values)
        response.write(compiled);
        response.end();
         })
    });
};

   
   server.on("request", function(request, response) {
     var handler = simpleRouter(request)

     if (handler != null) {
         handler(request, response)
     } else {
         response.writeHead(404);
         response.end();
     }
});
    
server.listen(8080, function (){
    console.log('listening on port 8080...')
})





























// const fs = require('fs');
// const template = require ('es6-template-strings');
// var contacts = []

// var handleFormGet = function(request, response) {
//  response.writeHead(200, {"Content-Type": "text/html"});
//  fs.readFile('template/form.html', 'utf8', function(err, data){
//    if (err) { throw err; }
//    response.write(data)
//    response.end(); 
//  })
// };

// var handleFormPost = function(request, response){

//   var bodyString = '';
//   request.on('data', (data) => {
//     console.log('Data ${data}')
//     bodyString += data;
//     console.log ('Body: ${bodyString}')
//   });

//   request.on ('end', function() {
//     console.log('END: ${bodyString}')
//     var post = queryString.parse(bodyString);
//     response.writeHead(200, {"Content-Type": "text/html"});
//     fs.readFile('template/contacts.html', 'utf8', (err, data) => {
//       if (err) { throw err }
//       var values = {
//         username: post ['username'],
//         lastName: post ['lastName']
//       }
//       var compiled = template(data, values);
//       response.write(compiled);
//       response.end()
//     })  
//   });

// }


// server.on("request", function(request, response) {
//   if ('GET' === request.method) {
//     handleFormGet(request, response);
//   } else if ('POST' === request.method) {
//     handleFormPost(response, request);
//   } else {
//   response.writeHead(404);
//   response.end();
//   }

// });


// server.listen(8888, function(){
//   console.log('Listening on port 8888...');
//  });



// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
// <script src="/index.js"></script>
     
