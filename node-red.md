#Steps in Node Red

see also http://m2m.demos.ibm.com/iotstarter.html

##Prerequisites
  Install either of the two relevant modules  
  cd /home/root/.node-red/node_modules/  
  choose one either
  npm install node-red-contrib-scx-ibmiotapp  (for ibmiot in, ibmiot out)     
  npm install node-red-contrib-ibm-watson-iot (for wiotp in, wiotp out)       

##Build a Bluemix app
  Create a new cloud foundry app and chose SDK for Node.js.  
  Bind your already existing IoT plarform service   
  The app connects to the IoT plattform using the credentials in VCAP_SERVICES.  
  Go to “Environment Variables” (look above “Start Coding”) 

##Create a device in Watson IoT Dashboard
  Open Watson IoT Dashboard  
  Create device type  
  Create a device  
  Add a name  
  Add an auth token 

##Edit "wiotp in" node 
  Connect as device  
  Credentials - add new wiotp credentials (see below)  
  Command - specify command = list    
  Name - cmd: list    

##Add new wiotp credentials 
  organisation    
  device type  
  device id  
  device token    
  name (optional)  
  
##Add function node to move the ? data into the payload object. 
  Name optional <your name>  
  line #1 msg.payload=msg.payload.d.<your name>  
  
##Exec node consumes the data, executes the Linux list command, and 
  Command  ls-la    
  Append    
  Extra input parameters - leave blank    
  Use spawn instead of exec? - leave blank    
  Name optional 

##Connect to IBM Watson Internet of Things Plaform as a Device

  
