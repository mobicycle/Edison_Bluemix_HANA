#Build a REST Web API on an Intel Edison in JavaScript

##What? 
Implement a REST API in JavaScript    
##Why? 
Expose Edison's inputs and outputs to a web client   
##How? 
RESTful APIs using AJAX principles allow a single-page client web app use to communicate with a server-side application    
##Who? 
jQuery runs the AJAX request in our client application. The server receives a request in the form of an XMLHttpRequest object. Javascript dynamically changes the current page to reflect the request. The response or HTTP reply is JavaScript code. The format is either as a string or in JSON.    

##PREREQUISITES

###Backend server
####Node.JS
  -a backend (server-side) framework for building single-page or client-server web apps   
  -asynchronous, event-based programming model    
  -see https://nodejs.org for installation instructions   

###Library: Rest API 
####Restify
  Is a node.js module built specifically to enable you to build correct REST web services.       
  Borrows heavily from express    
  Exists for "strict" API services that are maintanable and observable. 

####Express
  -a framework        
  -create our application server as an object

###Library: GPIO control  
####MRAA
  already included by default on the Edison
  IO library that helps you use I2c, SPI, gpio, uart, pwm, analog inputs (aio)        
  see https://www.npmjs.com/package/mraa      
  
###µpm 
  a (very) tiny package manager   
  npm install -g upm    

##Weaved
  connect easily and securely to your Edison from a mobile app or browser window        
  see https://developer.weaved.com/portal/members/edison.php

#Part 1: Getting Started  

##Make the app
opkg update Node.js
mkdir myapp   
cd myapp

##Build a server in Javascript
  Port = 3000        
  Format = JSON
  var server = restify.createServer();
  
#Part 2a: Restify:
npm install restify 
invoke the createServer API

#Part 2b: Express:   
Goal: Define the API middleware for our server-side application

##Install Express
npm init    
npm install express --save    
npm install connect --save    

##Install packages
  var http = require('http'); 
  var restify = require('restify');
  var express = require('express');
  
##Assign Express to a variable  
  var app = express();

##Define an array of objects for the client to query
  var inputs = [{ pin: '11', gpio: '17', value: 1 },    
                { pin: '12', gpio: '18', value: 0 }];

##Configure Express to serve index.html, browser.js et al
  app.use(express['static'](__dirname ));
  
##Define routes for the API calls and/or page requests to our server

####Express route for incoming requests

####Express route for any other unrecognised incoming requests

####Express route to handle errors

####Start the server application, listening on port 3000:

#Files
##Create the files
1.) Server-side Javascript code - backend.js    
2.) A simple HTML page - index.html   
3.) Client-side Javascript - browser.js    

###1.) Backend.js
  implement the GPIO interface, add the call to load the pi-gpio module
  var wpi = require(' pi-gpio');
  initialise the GPIO
  open the ports as inputs    
  (API receives a request for one of the inputs. The request should include the latest value read from the port.)      
  add a timer loop to read each GPIO input    
  store the latest value in our inputs array    
  retrieve and display the "something" at "you decide" second intervals   
  pass a callback function to a setInterval library function call   
  
###2.) Index.html  
  Create a placeholder to display the I/O values retrieved from Edison    
  Set up an input div as a placeholder, `<div id="input"></div>`      
  View output in our client-side JavaScript code sitting in browser.js
    
###3.) Browser.js
  The browser loads our HTML page and executes JS code on the client machine    
  The JS code will    
    -Request "something" from the API server running on the Edison    
    -Retrieve "something else" from the API server running on the Edison.   

##Start your web server which runs on your Edison 
    cd into the folder you have saved the source files
    enter `node app.js`
    open a web browser on http://your_edison_IP_address:3000
    
#Part 4: 

##GPIO Notes
    The mraa C library is the most direct way to get in touch with the Intel Edison's GPIO lines.
    The faster way to work with GPIO lines is via memory mapped I/O.
    Another mraa alternative, Sysfs, is a virtual file system. Use it to access hardware and the Linux kernel.
    Yocto Linux is a non-realtime operating system  
    I2C is a communications bus. Use it to connect a very large range of sensors. 
    The Edison has 40 digital GPIO connections, but no analog I/O.  
    You can write programs for the microcontroller or MCU that work with the GPIO lines without the need to involve the host CPU.
    
##UART example
  Read and write to the Edison’s UART port    
  Connect something to the UART port that can accept text input   
  Connect something connected to the UART port that can send information to the Edison (like and RFID reader)    
  enter curl –X POST –d “value=hello” http://EdisonIP/uart    

#Part 5:      
Congratulations! You now have a new web API running on Edison.         
To access your API from the internet, either          
-open the port on your LAN router to allow inbound requests (security risk)         
-use a service such as weaved.com      
