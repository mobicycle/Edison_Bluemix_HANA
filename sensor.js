//------------------------------------------------------------------------------
// Copyright MobiCycle Ltd 2016
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//------------------------------------------------------------------------------
var sensor = require('');
var mqtt = require('mqtt');
var url = require('url');
var macUtil = require('getmac');
var properties = require('properties');
var connected = false;


properties.parse('./config.properties', {path: true}, function(err, cfg) {
  if (err) {
    console.error('A file named sensor.properties containing the device registration from the IBM IoT Cloud is missing.');
    console.error('The file must contain the following properties: org, type, id, auth-token.');
    throw e;
  }
  macUtil.getMac(function(err, macAddress) {
    if (err) throw err;
    var deviceId = macAddress.replace(/:/gi, '');
    console.log('Device MAC Address: ' + deviceId);

    if(cfg.id != deviceId) {
    	console.warn('The device MAC address does not match the ID in the configuration file.');
    }

    var clientId = ['d', cfg.org, cfg.type, cfg.id].join(':');

    var client = mqtt.connect("mqtts://" + cfg.org + '.messaging.internetofthings.ibmcloud.com:8883', 
      {
        "clientId" : clientId,
        "keepalive" : 30,
        "username" : "use-token-auth",
        "password" : cfg['auth-token']
      });
    client.on('connect', function() {
	  console.log('MQTT client connected to IBM IoT Cloud.');
    });
    client.on('error', function(err) {
	  console.log('client error' + err);
	  process.exit(1);
    });
    client.on('close', function() {
	  console.log('client closed');
	  process.exit(1);
    });
    monitorSensor(client);
  });
});

function monitorSensor(client) {
  console.log('Make sure the Sensor is on!');

  Sensor.discover(function(device){
	console.log('Discovered device with UUID: ' + device['uuid']);

	device.connect(function(){
	  connected = true;
	  console.log('Connected To Sensor');
	  device.discoverServicesAndCharacteristics(function(callback){
	    //getDeviceInfo();
		initAirSensors();
		initAccelAndGyro();
		initKeys();
	  });
	});

	device.on('disconnect', function(onDisconnect) {
	  connected = false;
	  client.end();
	  console.log('Device disconnected.');
	});

	function getDeviceInfo() {
	  device.readDeviceName(function(callback) {
	    console.log('readDeviceName: '+callback);
	  });
	  device.readSystemId(function(callback) {
	    console.log('readSystemId: '+callback);
	  });
	  device.readSerialNumber(function(callback) {
		console.log('readSerialNumber: '+callback);
	  });
	  device.readFirmwareRevision(function(callback) {
	    console.log('readFirmwareRevision: '+callback);
	  });
	  device.readHardwareRevision(function(callback) {
	    console.log('readHardwareRevision: '+callback);
	  });
	  device.readSoftwareRevision(function(callback) {
		console.log('readSoftwareRevision: '+callback);
	  });
	  device.readManufacturerName(function(callback) {
		console.log('readManufacturerName: '+callback);
	  });
	}

	function initKeys() {
	  device.notifySimpleKey(function(left, right) {
	  });
	};


	}
  });
};
