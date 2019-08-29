const express = require('express');
var mqtt = require('mqtt');
const app = express();

const data = require("./endpoints.json");

var client = mqtt.connect("mqtt://192.168.1.101", {clientId:"TESTOEE"});

client.on("connect", function(){	
	console.log("Connected to MQTT Broker.");
});

client.subscribe('Test', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic.')
    }
});

var mqtt_data;

client.on('message', function (topic, message) {
	// message is Buffer
	mqtt_data = message.toString();
	//client.end()
});

for (let index = 0; index < data.endpoints.length; index++) {
	const element = data.endpoints[index];
	app.get(element.url, (req, res) => {
		res.send(mqtt_data);
  	});
}

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});