// const http = require('http');
// const queryString = require('querystring');
// const server = http.createServer();
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


 //form.html

 
// <div id="main" style="margin-bottom: 42%; background-color: rgb(0, 0, 58);" >
   
//    </div>
//    <div id="mySidenav" class="sidenav">
     
//      <a href="javascript:void(0)" class="close"></a>

//      <div class="accordion">
//        <div class="item">
//          <div class="header">
//            <a href="#"></a><h3 style="margin-left: 4%;">ChatRooms</h3></a>
          
//          </div>
//          <div class="content">
//            <ul>
//           <a href="#"><p style="color: #fff;">Let's taco 'bout it</p></a>
//           <a href="https://www.google.com/search?q=lettuce&oq=lettuce&aqs=chrome..69i57j46j0l2j46j0l3.2855j0j7&sourceid=chrome&ie=UTF-8" target="blank"><p style="color: #fff;">Lettuce be friends</p></a>
//           <a href="#"><p style="color: #fff;">Butter half</p></a>
//          </ul>
//          </div>
//        </div>
//        <a href="#"><div class="underline"></div></a>
//         <div class="item">
//          <div class="header">
//            <a href="#"></a><h3 style="margin-left: 9%;">Friends</h3></a>
           
//          </div>
//          <div class="content">
//            <ul>
//            <li style ="margin-left: 16%;">Online</li>
//            <br />
//            <li><a href="#"><p style="color: #fff;">HarkerJ</p></a></li>
//            <a href="#"><p style="color: #fff;">VladDracula</p></a>
//            <li><a href="#"><p style="color: #fff;">LestatTheVamp</p></a></li>
//            <li><a href="#"><p style="color: #fff;">VanHelsing</p></a></li>
//          </ul>
//          </div>
//        </div>
//        <a href="#"><div class="underline"></div></a>
//         <div class="item">
//          <div class="header">
//            <h3 style="margin-left: 13%;">Add</h3>
           
//          </div>
//          <div class="content">
//            <p>Click to add</p>
//          </div>
//        </div>
//        <a href="#"><div class="underline"></div></a>
//      </div>
     

//      <!-- <a href="#" class="navtext">ChatRooms</a>
//      <a href="#" class="navtext">Friends</a>
//      <a href="#" class="navtext">Add</a> -->
//    </div>
   

//    <section class="msger">
//      <header class="msger-header">
//        <div class="msger-header-title" style="margin: 0%;">
//          <i class="fas fa-comment-alt"></i> <h3 class="header-title" style="text-align: center; font-family:'Open Sans', sans-serif; letter-spacing: 2px;"> ChatRoom</h3><span id = "nav-icon" onclick="toggleNav()">
//            <div class="container" onclick="myFunction(this)">
//            <div class="bar1"></div>
//            <div class="bar2"></div>
//            <div class="bar3"></div>
//          </div>
//        </span>
//        </div>
//        <div class="msger-header-options">
//          <span><i class="fas fa-cog"></i></span>
//        </div>
//      </header>
   
//      <main class="msger-chat">
//        <div class="msg left-msg">
//          <div
//           class="msg-img"
//           style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"
//          ></div>
   
//          <div class="msg-bubble">
//            <div class="msg-info">
//              <div class="msg-info-name">BOT</div>
//              <div class="msg-info-time">12:45</div>
//            </div>
   
//            <div class="msg-text">
//              Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
//            </div>
//          </div>
//        </div>
   
//        <div class="msg right-msg">
//          <div
//           class="msg-img"
//           style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"
//          ></div>
   
//          <div class="msg-bubble">
//            <div class="msg-info">
//              <div class="msg-info-name">Sajad</div>
//              <div class="msg-info-time">12:46</div>
//            </div>
   
//            <div class="msg-text">
//              You can change your name in JS section!
//            </div>
//          </div>
//        </div>
//      </main>
   
//      <form class="msger-inputarea">
//        <input type="text" class="msger-input" placeholder="Enter your message...">
//        <button type="submit" class="msger-send-btn">Send</button>
//      </form>
//    </section>

//    <section class="online">



//    </section>

   
//  <style>
//    .title {
//  text-align: center;
// }

// .accordion {
//  width: 480px;
//  margin: 30px auto;
//  border: 1px solid rgba(50, 50, 50, 0.25);
// }

// .accordion .item {
//  overflow: hidden;
//  color: #fff;
//  opacity: 0.7;
//  cursor: pointer;
//  transition: .5s;
// }

// .underline {
//  height: 3px;
//  width: 100%;
//  background-image: linear-gradient(315deg, #2876f9 0%, #6d17cb 74%);
//  opacity: 0.7;
//  margin-top: 2%;
//  margin-left: -14%;
// }



// .accordion .item:hover {
//  overflow: hidden;
//  opacity:1;
//  background: linear-gradient(315deg, #f5d020 50%, #f53803 74%);
//  -webkit-background-clip: text;
//  -webkit-text-fill-color: transparent;
// }

// .accordion .header {
//  padding: 15px 20px;
//  cursor: pointer;
//  color: white;
// }
// /* 
// .accordion .header a:focus {
//  overflow: hidden;
//  opacity:1;
//  background: linear-gradient(315deg, #f5d020 50%, #f53803 74%);
//  -webkit-background-clip: text;
//  -webkit-text-fill-color: transparent;
// } */

// .accordion .header h3 {
//  margin: 0;
//  font-size: 29px;
//  margin-left: 0%;
// }


// .accordion .content{
//  padding: 0 20px;
//  font-size: 15px;
//  line-height: 36px;
//  max-height: 0;
//  transition: all ease-in-out 0.2s;
//  color: white;
// }

// .accordion .item.open .content {
//  padding: 20px;
//  max-height: 200px;
// }

//    :root {
//  --body-bg: ;
//  --msger-bg: rgb(0, 0, 58);
//  --border: ;
// }

// .content ul li{
//  color: green;
// }

// *,
// *:before,
// *:after {
//  margin: 0;
//  padding: 0;
//  box-sizing: inherit;
// }

// body {
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  height: 100vh;
//  background-image: var(--body-bg);
//  font-family: Helvetica, sans-serif;
// }

// .msger {
//  display: flex;
//  flex-flow: column wrap;
//  justify-content: space-between;
//  width: 100%;
//  height: 100vh;
//  background: var(--msger-bg);
//  box-shadow: 0 15px 15px -5px rgba(0, 0, 0, 0.2);
// }

// .msger-header {
//  display: flex;
//  justify-content: space-between;
//  padding: 30px;
//  border-bottom: var(--border);
//  background:rgb(0, 0, 58);
//  color: #ddd;
//  text-align: center;
// }
// .header-title h3{
//  margin-left: 50%;
// }

// .msger-chat {
//  flex: 1;
//  overflow-y: auto;
//  padding: 10px;
// }
// .msger-chat::-webkit-scrollbar {
//  width: 6px;
// }
// .msger-chat::-webkit-scrollbar-track {
//  background: #ddd;
// }
// .msger-chat::-webkit-scrollbar-thumb {
//  background: #bdbdbd;
// }
// .msg {
//  display: flex;
//  align-items: flex-end;
//  margin-bottom: 10px;
//  margin-left: 7%;
// }
// .msg:last-of-type {
//  margin-right: 7%;
// }
// .msg-img {
//  width: 50px;
//  height: 50px;
//  margin-right: 10px;
//  background: #ddd;
//  background-repeat: no-repeat;
//  background-position: center;
//  background-size: cover;
//  border-radius: 50%;
// }
// .msg-bubble {
//  max-width: 450px;
//  padding: 15px;
//  border-radius: 15px;
//  color: #fff;
//  background-color: #f5d020;
// background-image: linear-gradient(315deg, #f5d020 0%, #f53803 74%);
// }
// .msg-info {
//  display: flex;
//  justify-content: space-between;
//  align-items: center;
//  margin-bottom: 10px;
// }
// .msg-info-name {
//  margin-right: 10px;
//  font-weight: bold;
// }
// .msg-info-time {
//  font-size: 0.85em;
// }

// .left-msg .msg-bubble {
//  border-bottom-left-radius: 0;
// }

// .right-msg {
//  flex-direction: row-reverse;
// }
// .right-msg .msg-bubble {
//  background-color: #2876f9;
// background-image: linear-gradient(315deg, #2876f9 0%, #6d17cb 74%);
//  color: #fff;
//  border-bottom-right-radius: 0;
// }
// .right-msg .msg-img {
//  margin: 0 0 0 10px;
// }

// .msger-inputarea {
//  display: flex;
//  padding: 20px;
//  border-top: var(--border);
//  outline: none;
// }
// .msger-inputarea * {
//  padding: 10px;
//  border: none;
//  border-radius: 3px;
//  font-size: 1em;
//  color: #fff;
//  outline: none;
// }
// .msger-input {
//  flex: 1;
//  background: rgba(73, 72, 72, 0.315);
// }
// .msger-send-btn {
//  margin-left: 10px;
//  background-color: #2876f9;
//  background-image: linear-gradient(315deg, #2876f9 0%, #6d17cb 74%);
//  color: #fff;
//  font-weight: bold;
//  cursor: pointer;
//  transition: .5s;
//  opacity: 0.7;
// }
// .msger-send-btn:hover {
//  background-color: #f5d020;
//  background-image: linear-gradient(315deg, #f5d020 0%, #f53803 74%);
//  opacity: 1;
// }

// .msger-chat {
//  background-color: rgb(0, 0, 58);
// }

// .header-title {
//  padding-left: 839%;
//  font-family: Helvetica, Arial, sans-serif;
// }
// .sidenav {
//  height: 100%;
//  width: 0;
//  position: fixed;
//  z-index: 1;
//  top: 0;
//  left: 0;
//  background-color: rgb(0, 0, 29);
//  overflow-x: hidden;
//  transition: 0.5s;
//  padding-top: 60px;
// }
// /*  
// .sidenav a {
//  padding: 8px 8px 8px 32px;
//  text-decoration: none;
//  font-size: 25px;
//  color: #818181;
//  display: block;
//  transition: 0.3s;
// } */
// /* 
// .sidenav a:hover {
//  color: #f1f1f1;
// } */

// ::selection { background-color: #C3CFE2; }

// .navtext{
//  background: linear-gradient(315deg, #2876f9 60%, #6d17cb 74%);
//  -webkit-background-clip: text;
//  -webkit-text-fill-color: transparent;
//  transition: .5s ease-in-out;
//  opacity: 0.7;
// }


// .navtext:hover{
//  opacity:1;
//  background: linear-gradient(315deg, #f5d020 0%, #f53803 74%);
//  -webkit-background-clip: text;
//  -webkit-text-fill-color: transparent;
// }

// #main {
//  transition: margin-left .5s;
//  background: transparent; 
// }

// @media screen and (max-height: auto) {
//  .sidenav {padding-top: 15px;};
//  .sidenav a {font-size: 18px;};
// }

// .container {
//  display: inline-block;
//  cursor: pointer;
 
//  background-color: rgb(0, 0, 58) ;
// }

// .bar1, .bar2, .bar3 {
//  width: 35px;
//  height: 5px;
//  background-color: #fff;
//  margin: 6px 0;
//  transition: 0.4s;
// }

// .change .bar1 {
//  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
//  transform: rotate(-45deg) translate(-9px, 6px);
// }

// .change .bar2 {opacity: 0;}

// .change .bar3 {
//  -webkit-transform: rotate(45deg) translate(-8px, -8px);
//  transform: rotate(45deg) translate(-8px, -8px);
// }

// </style>
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
// <script src="/index.js"></script>
     