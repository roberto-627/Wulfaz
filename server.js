const express = require('express');
const mqtt = require('mqtt');
const fs = require('fs');

const app = express();

var data = require("./endpoints.json");

var client = mqtt.connect("mqtt://", {clientId:"EES"});

client.on("connect", function(){	
	console.log("Connected to MQTT Broker.");
});

client.subscribe('', function (err) {
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

app.get("/", (req, res) => {
	res.status(500).send(data.endpoints);
});

app.put("/", (req, res) => {
	fs.writeFile('./endpoints.json', JSON.stringify({
		"endpoints": [
			{
				"url": "/test",
				"alias": "Home",
				"topic": ""
			}
		]
	}), function(err) {
		if(err) {
			return console.log(err);
		}

		console.log("The file was saved!");
	});
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 9080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
