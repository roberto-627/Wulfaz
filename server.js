const express = require('express');
const mqtt = require('mqtt');
const fs = require('fs');

const app = express();

var data = require("./endpoints.json");

var client = mqtt.connect("mqtt://", {clientId:"EES"});

client.on("connect", function(){	
	console.log("Connected to MQTT Broker.");
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S1/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp S1');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S2/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp S2');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S2/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp S2');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S3/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp S3');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S4/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp S4');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S5/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp S5');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S6/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp S6');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S7/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp S7');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S8/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp S8');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S9/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp S9');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S10/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp S10');
    }
});

var TS1;
var TS2;
var TS3;
var TS4;
var TS5;
var TS6;
var TS7;
var TS8;
var TS9;
var TS10;

var mqtt_data;

var response_structure = { 
	"data": { 
		"Tag": 0,
		"Etapa":"Secadora1"
	},
	"ts":""
}

client.on('message', function (topic, message) {
	mqtt_data = message.toString();
	switch (topic.toString()) {
		case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S1/fmt/json':
			TS1 = mqtt_data;
			break;
		case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S2/fmt/json':
			TS2 = mqtt_data;
			break;
		case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S3/fmt/json':
			TS3 = mqtt_data;
			break;
		case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S4/fmt/json':
			TS4 = mqtt_data;
			break;
		case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S5/fmt/json':
			TS5 = mqtt_data;
			break;
		case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S6/fmt/json':
			TS6 = mqtt_data;
			break;
		case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S7/fmt/json':
			TS7 = mqtt_data;
			break;
		case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S8/fmt/json':
			TS8 = mqtt_data;
			break;
		case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S9/fmt/json':
			TS9 = mqtt_data;
			break;
		case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp S10/fmt/json':
			TS10 = mqtt_data;
			break;
		default:
			break;
	}
	//console.log(mqtt_data);
	//client.end()
});

/*
for (let index = 0; index < data.endpoints.length; index++) {
	const element = data.endpoints[index];
	app.get(element.url, (req, res) => {
		res.send(mqtt_data);
  	});
}
*/

//{ "d" : { "Temp S1" : [ 23 ] }, "ts" : "2019-09-03T02:16:22.885935" }

app.get("/Temperatura/Secadora1", (req, res) => {
	TS1 = JSON.parse(TS1);
	response_structure.data.Etapa = "Secadora1";
	response_structure.data.Tag = TS1.d['Temp S1'][0];
	response_structure.ts = TS1.ts;
	res.status(200).send(response_structure);
});

app.get("/Temperatura/Secadora2", (req, res) => {
	TS2 = JSON.parse(TS2);
	response_structure.data.Etapa = "Secadora2";
	response_structure.data.Tag = TS2.d['Temp S2'][0];
	response_structure.ts = TS2.ts;
	res.status(200).send(response_structure);
});

app.get("/Temperatura/Secadora3", (req, res) => {
	TS3 = JSON.parse(TS3);
	response_structure.data.Etapa = "Secadora3";
	response_structure.data.Tag = TS3.d['Temp S3'][0];
	response_structure.ts = TS3.ts;
	res.status(200).send(response_structure);
});

app.get("/Temperatura/Secadora4", (req, res) => {
	TS4 = JSON.parse(TS4);
	response_structure.data.Etapa = "Secadora4";
	response_structure.data.Tag = TS4.d['Temp S4'][0];
	response_structure.ts = TS4.ts;
	res.status(200).send(response_structure);
});

app.get("/Temperatura/Secadora5", (req, res) => {
	TS5 = JSON.parse(TS5);
	response_structure.data.Etapa = "Secadora5";
	response_structure.data.Tag = TS5.d['Temp S5'][0];
	response_structure.ts = TS5.ts;
	res.status(200).send(response_structure);
});

app.get("/Temperatura/Secadora6", (req, res) => {
	TS6 = JSON.parse(TS6);
	response_structure.data.Etapa = "Secadora6";
	response_structure.data.Tag = TS6.d['Temp S6'][0];
	response_structure.ts = TS6.ts;
	res.status(200).send(response_structure);
});

app.get("/Temperatura/Secadora7", (req, res) => {
	TS7 = JSON.parse(TS7);
	response_structure.data.Etapa = "Secadora7";
	response_structure.data.Tag = TS7.d['Temp S7'][0];
	response_structure.ts = TS7.ts;
	res.status(200).send(response_structure);
});

app.get("/Temperatura/Secadora8", (req, res) => {
	TS8 = JSON.parse(TS8);
	response_structure.data.Etapa = "Secadora8";
	response_structure.data.Tag = TS8.d['Temp S8'][0];
	response_structure.ts = TS8.ts;
	res.status(200).send(response_structure);
});

app.get("/Temperatura/Secadora9", (req, res) => {
	TS9 = JSON.parse(TS9);
	response_structure.data.Etapa = "Secadora9";
	response_structure.data.Tag = TS9.d['Temp S9'][0];
	response_structure.ts = TS9.ts;
	res.status(200).send(response_structure);
});

app.get("/Temperatura/Secadora10", (req, res) => {
	TS10 = JSON.parse(TS10);
	response_structure.data.Etapa = "Secadora10";
	response_structure.data.Tag = TS10.d['Temp S10'][0];
	response_structure.ts = TS10.ts;
	res.status(200).send(response_structure);
});

app.post("/Arranque/Secadora1/1", (req, res) => {
	client.publish('iot-2/type/cMT-G01 Gateway/id/device_id/evt/Start Auto Sec 1/fmt/json', 'true');
	response_structure.data.Etapa = "Secadora1";
	response_structure.data.Tag = 1;
	response_structure.ts = TS10.ts;
	res.status(200).send(response_structure);
});

/*
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
*/
// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 9080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
