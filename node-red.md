#Steps in Node Red

see also http://m2m.demos.ibm.com/iotstarter.html
https://libraries.io/npm/node-red-contrib-scx-ibmiotapp

##Definitions
scx-ibmiotapp can be used within, as well as, outside the IBM Bluemix environment (preferred)   
ibm-watson-iot is for connecting to the IBM Watson IoT Platform as a Device or Gateway

The Watson IoT plaftorm uses pub/sub. As each device connects to the Watson IoT platform, it internally publishes to its own unique topic string. If you register your devices, you get a unique org.

##Secure your Node-RED flow with a password
  In the Bluemix dashboard, select the 'Environment Variables' page for your application    
  Add the following user-defined variables:  
    NODE_RED_USERNAME - the username to secure the editor 
    NODE_RED_PASSWORD - the password to secure the editor  
  Click Save    

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
  
#Registered Devices  

##Install and edit "ibmiot in" on the Edison
  npm install node-red-contrib-scx-ibmiotapp@0.0.xx
  Enter the API Key, API Key and API Token options 
  The API Key and Token can be shared across multiple nodes 

##Install and edit "ibmiot in" node on Bluemix
  npm install node-red-contrib-scx-ibmiotapp@0.0.xx

###Receive device events    
  In your IBM IoT Foundation Service Dashboard  
  Create an API Key  
  Create Authentication Token  
  Select the ACCESS tab => API Keys tab 
  Click the Generate API Key  
  COPY AND SAVE the display API Key and Token 
  


###Receive device status    

###Receive device commands (on the behalf of a device)    

###Receive application status   

##Install and edit "ibmiot out" node

###Send device commands

###Send device events

##Install and edit "wiotp in" node 
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
  double click on the IBM IoT node
  replace the device ID with your device ID
  Click "Ok"
  Click on the red "Deploy" button
  Click the green debug nodes to see data
  Double-click the blue Send to Watson IoT Platform node in the Device Simulator flow.
  Verify that Authentication = Bluemix Service
  Paste the Device Type
  Paste the Device ID
  Click OK
  click Deploy
  
  
  ##Create cards to show live data
  
