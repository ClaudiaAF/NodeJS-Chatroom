const http = require('http');
const queryString = require('querystring');
const server = http.createServer();
const fs = require('fs')
const template = require ('es6-template-strings');
const loggedInUsers = []
var bodyString = '';

var io = require('socket.io')(server) 

io.on('connection', (socket) => {
  console.log("a user has connected")
  io.emit("clientConnected", "you have succesfully connected to the server")

  socket.on('chatroom', (msg) => {
    console.log(`this was a message from chat room: ${msg}`)
    io.emit('chatroom', msg) 
  })
})


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
        {method: 'GET', path: '/profile', handler: handleProfileGet},
        {method: 'GET', path: '/log-in', handler: handleLoginGet},
        {method: 'POST', path: '/log-in', handler: handleLoginPost},
        {method: 'GET', path: '/chat', handler: handleChatGet}
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

  var handleProfileGet = function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('template/profile.html', 'utf8', function(err, data) {
      if (err) { throw err; }
      response.write(data);
      response.end(bodyString);
    });
  };

  var handleLoginGet = function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('template/login.html', 'utf8', function(err, data) {
      if (err) { throw err; }
      response.write(data);
      response.end(bodyString);
    });
  };

  var handleChatGet = function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('template/dashboard.html', 'utf8', function(err, data) {
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
    fs.readFile('template/dashboard.html', 'utf8', (err, data) => {
        if (err) { throw err }
        var values ={
            username: post['username'], 
        }
            ;

        var compiled = template(data, values)
        response.write(compiled);
        response.end();
         })
        })
};

var handleLoginPost = (request, response) => {
    
    response.writeHead(200, {"Content-Type": "text/html"});
    var bodyString = '';
    request.on('data', function (data) {
    bodyString += data;

    });

    request.on('end', function () {
    var post = queryString.parse(bodyString);
    loggedInUsers.push(post)
    response.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('template/dashboard.html', 'utf8', (err, data) => {
        if (err) { throw err }
        var values ={
            username: post['username'],
            loggedUsers:listLoginUsers(loggedInUsers)
        }
        var compiled = template(data, values)
        response.write(compiled);
        response.end();
      });
    
    });
}
    // response.writeHead(200, {"Content-Type": "text/html"});
    // fs.readFile('template/404.html', 'utf8', (err, data) => {
    //     if (err) { throw err }
    //     var values ={
    //         username: post['username'],
    //   }
    //     var compiled = template(data, values)
    //     response.write(compiled);
    //     response.end();
    //   })
    // }
    

const listLoginUsers = (loggedUsers) => {
  var list = ''
  for (user of loggedInUsers){
    list += `<li>
      <p>${user.username}<p>
      <p>4 hours</p>
      </li>`
      }
      return list
}

   
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