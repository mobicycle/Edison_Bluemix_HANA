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
##Node.JS
  -a backend (server-side) framework for building single-page or client-server web apps   
  -asynchronous, event-based programming model    
  -see https://nodejs.org for installation instructions   
  
##Express
  -a framework        
  -create our application server as an object
  
##Code
mkdir myapp   
cd myapp    
npm init    
npm install express --save    
npm install connect --save    

##Files
1.) Server-side Javascript code - backend.js    
2.) A simple HTML page - index.html   
3.) Client-side Javascript - browser.js    

##Build a server in Javascript
  Port = 3000        
  Format = JSON
  
##Install packages
  var http = require('http');          
  var express = require('express');
  
##Assign Express to a variable  
  var app = express();

##Define an array of objects for the client to query
  var inputs = [{ pin: '11', gpio: '17', value: 1 },    
                { pin: '12', gpio: '18', value: 0 }];

##Configure Express to serve index.html, browser.js et al
  app.use(express['static'](__dirname ));
  
#Part 2: Define the API middleware for our server-side application  

##Define routes for the API calls and/or page requests to our server

####Express route for incoming requests

####Express route for any other unrecognised incoming requests

####Express route to handle errors

#####Start the server application, listening on port 3000:

##Index.html  
  Create a placeholder to display the I/O values retrieved from Edison    
  Set up an input div as a placeholder, `<div id="input"></div>`      
  View output in our client-side JavaScript code sitting in browser.js
