#Steps in Node Red

see also http://m2m.demos.ibm.com/iotstarter.html
https://libraries.io/npm/node-red-contrib-scx-ibmiotapp

##Definitions
  scx-ibmiotapp can be used within, as well as, outside the IBM Bluemix environment (Bluemix)   
  ibm-watson-iot is for connecting to the IBM Watson IoT Platform as a Device or Gateway (Edison)

The Watson IoT plaftorm uses pub/sub. As each device connects to the Watson IoT platform, it internally publishes to its own unique topic string. If you register your devices, you get a unique org.

##Secure your Node-RED flow with a password
  Go to the Bluemix dashboard
  Go to 'Environment Variables' 
    Add your NODE_RED_USERNAME   
    Add your NODE_RED_PASSWORD 
  Click Save    
--------------------------------------------------------------------------------
#Steps

  Install Node-RED on your Device 
  Create a Node-RED application to receive events from the device   
  Register your Device    
    Simulate a Temperature Device   
    Analyze temperature data    
  Send commands to your device    
  Receive commands on your device   
  
--------------------------------------------------------------------------------
#Install 
  cd /home/root/.node-red/node_modules/  
  choose one either
    npm install node-red-contrib-scx-ibmiotapp  (for ibmiot in, ibmiot out)     
    npm install node-red-contrib-ibm-watson-iot (for wiotp in, wiotp out) 
 
##Install and edit "ibmiot in" on the Edison
  npm install node-red-contrib-scx-ibmiotapp@0.0.xx (if necessary)
  Enter the API Key, API Key and API Token options 
  The API Key and Token can be shared across multiple nodes 

##Install and edit "ibmiot in" node on Bluemix
  npm install node-red-contrib-scx-ibmiotapp@0.0.xx (if necessary)
  Register your device on the platform  ....
  Get device credentials
  Generate API Key 
  Generate Token 
  
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
---------------------------------------------------------------------------

##Build a Bluemix app
  Create a new cloud foundry app and chose SDK for Node.js.  
  Bind your already existing IoT plarform service   
  The app connects to the IoT plattform using the credentials in VCAP_SERVICES.  
  Go to “Environment Variables” (look above “Start Coding”) 

---------------------------------------------------------------------------

##Register a device in Watson IoT Dashboard (from the Intel Edison in Bluemix) 
  Open Watson IoT Dashboard  
  Create device type  
  Create a device  
  Add a name  
  Add an auth token 
  
  ###1
  In your IBM IoT Foundation Service Dashboard  
  Create an API Key  
  Create Authentication Token  
  Select the ACCESS tab => API Keys tab 
  Click the Generate API Key  
  COPY AND SAVE the display API Key and Token 
  
  ###2 Double-click the blue Send to Watson IoT Platform node in
  Verify that Authentication = Bluemix Service
  Paste the Device Type
  Paste the Device ID
  Click OK
  Click Deploy
  Double-click the blue IBM IoT App In node
  Change Authentication to Bluemix Service
  Select All for Device Type, Device Id, Event, and Format
  device ID = MAC address with no colons. run the ifconfig if necessary
  Click OK
  Click Deploy
  
  ###3 Validate the device connection
  Open another browser tab or window
  Watson IoT Platform dashboard
  Select Devices
  device information page opens
  See the connection status = disconnected
  Node-RED flow editor
  Click the button on the gray Send Data node 
  Generate an asset payload
  debug tab, messages
  Watson IoT Platform device information page, verify that you see the same data points received from the device in the Sensor Information section
  
  ###4 
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
  
-------------------------------------------------------------------------  
More Bluemix

#Receive device commands (on the behalf of a device) in Bluemix 

###Receive device status    
go into the sensor section
select to manage sensors 

###Receive application status  

---------------------------------------------------------------------------

#Send device commands from Bluemix to Intel Edison

##Install and edit "ibmiot out" node
Go to output pane
Drag and drop ibmiot node
Configure it with the same api keys
Configure the device Id
Set the Output type as Device Command
Click deploy

###Send device events

---------------------------------------------------------------------
#Receive commands on your Intel Edison device from Bluemix

  After adding an Watson IoT Input node on the Edison
  Configure the node to connect as a Device
  Use the previous credentials 
  Set it to receive all commands
  Attach a debug node to the Watson IoT Input node
  Deploy the flow

---------------------------------------------------------------------------  
#####Add function node to move the ? data into the payload object. 
  Name optional <your name>  
  line #1 msg.payload=msg.payload.d.<your name>  
  
#####Exec node consumes the data, executes the Linux list command, and 
  Command  ls-la    
  Append    
  Extra input parameters - leave blank    
  Use spawn instead of exec? - leave blank    
  Name optional 
  
  inject node
  function node
  Watson IoT Output node


  
