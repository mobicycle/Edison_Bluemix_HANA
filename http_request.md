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
  
##Code
mkdir myapp
cd myapp
npm init
npm install express --save
npm install connect --save

##Files
1.) Server-side Javascript code - myapi.js
2.) A simple HTML page - index.html
3.) Client-side Javascript - myclient.js


  
