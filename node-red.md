#Steps in Node Red

##Create a device in Watson IoT Dashboard
see the following link

##Install Watson IoTP (wiotp) in node
see the following link

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
  
