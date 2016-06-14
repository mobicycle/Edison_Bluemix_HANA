# Edison_Bluemix_HANA

##About	
We connect IBM Bluemix to the Intel Edison.  We also connect Bluemix, HANA and the Edison. The apps are written on IBM Bluemix or SAP's HANA platform with Intel Edison integration. 

##Apps	
E-Advisor	
IoT weight sensors	

##Dependencies
-
-

##The Code	
Here is the link to clone the git repository

##Prerequisites
IBM IoT Cloud service in Bluemix.  

##To Create an IoT Service in Bluemix:		

##Create an organization:		
Log into bluemix.net	
Go to the catalo	 
Select create an new IoT service	
Name the service <service name>	
Go to the App dropdown	 
Select "Leave Unbound"	
Next, we will launch the Bluemix dashboard in order to register your device.	 

##Register your devices:	
Select the IoT service you just create	 
Click Launch to launch the IoT dashboard	
Follow the the steps below to register your device	
Click the Devices tab	
Click Add Device	
In the Device Type dropdown select <your sensor>	
In the Device ID field, enter the MAC address (without the colons)	 
Click Continue	
Copy your device's properties!!!	
Save the properties into a file called sensor.properties	 

##Sample properties - provide your own:
auth-token=kh5gyJ?spG73CnJOVH	
id=a5e85437d5ea		
type=sensor		
org=org123		
auth-method=token	








