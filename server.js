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

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp H1/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp H1');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp H2/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp H2');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp H3/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp H3');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp H4/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Temp H4');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 1/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Conf Sec 1');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 2/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Conf Sec 2');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 3/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Conf Sec 3');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 4/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Conf Sec 4');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 5/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Conf Sec 5');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 6/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Conf Sec 6');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 7/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Conf Sec 7');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 8/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Conf Sec 8');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 9/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Conf Sec 9');
    }
});

client.subscribe('iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 10/fmt/json', function (err) {
    if (!err) {
		console.log('Succesfully connected to topic: Conf Sec 10');
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
var TH1;
var TH2;
var TH3;
var TH4;
var CS1;
var CS2;
var CS3;
var CS4;
var CS5;
var CS6;
var CS7;
var CS8;
var CS9;
var CS10;

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
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp H1/fmt/json':
            TH1 = mqtt_data;
            break;
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp H2/fmt/json':
            TH2 = mqtt_data;
            break;
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp H3/fmt/json':
            TH3 = mqtt_data;
            break;
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Temp H4/fmt/json':
            TH4 = mqtt_data;
            break;
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 1/fmt/json':
            CS1 = mqtt_data;
            break;
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 2/fmt/json':
            CS2 = mqtt_data;
            break;
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 3/fmt/json':
            CS3 = mqtt_data;
            break;
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 4/fmt/json':
            CS4 = mqtt_data;
            break;
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 5/fmt/json':
            CS5 = mqtt_data;
            break;
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 6/fmt/json':
            CS6 = mqtt_data;
            break;
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 7/fmt/json':
            CS7 = mqtt_data;
            break;
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 8/fmt/json':
            CS8 = mqtt_data;
            break;
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 9/fmt/json':
            CS9 = mqtt_data;
            break;
        case 'iot-2/type/cMT-G01 Gateway/id/CMT_INLOHER/evt/Conf Sec 10/fmt/json':
            CS10 = mqtt_data;
            break;
		default:
			break;
	}
});

/*
for (let index = 0; index < data.endpoints.length; index++) {
	const element = data.endpoints[index];
	app.get(element.url, (req, res) => {
		res.send(mqtt_data);
  	});
}
*/

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

app.get("/Temperatura/Horno1", (req, res) => {
	TH1 = JSON.parse(TH1);
	response_structure.data.Etapa = "Horno1";
	response_structure.data.Tag = TH1.d['Temp H1'][0];
	response_structure.ts = TH1.ts;
	res.status(200).send(response_structure);
});

app.get("/Temperatura/Horno2", (req, res) => {
	TH2 = JSON.parse(TH2);
	response_structure.data.Etapa = "Horno2";
	response_structure.data.Tag = TH2.d['Temp H2'][0];
	response_structure.ts = TH2.ts;
	res.status(200).send(response_structure);
});

app.get("/Temperatura/Horno3", (req, res) => {
	TH3 = JSON.parse(TH3);
	response_structure.data.Etapa = "Horno3";
	response_structure.data.Tag = TH3.d['Temp H3'][0];
	response_structure.ts = TH3.ts;
	res.status(200).send(response_structure);
});

app.get("/Temperatura/Horno4", (req, res) => {
	TH4 = JSON.parse(TH4);
	response_structure.data.Etapa = "Horno4";
	response_structure.data.Tag = TH4.d['Temp H4'][0];
	response_structure.ts = TH4.ts;
	res.status(200).send(response_structure);
});

app.get("/Confirmacion/Secadora1", (req, res) => {
	CS1 = JSON.parse(CS1);
	response_structure.data.Etapa = "Secadora1";
	response_structure.data.Tag = CS1.d['Conf Sec 1'][0];
	response_structure.ts = CS1.ts;
	res.status(200).send(response_structure);
});

app.get("/Confirmacion/Secadora2", (req, res) => {
	CS2 = JSON.parse(CS2);
	response_structure.data.Etapa = "Secadora2";
	response_structure.data.Tag = CS2.d['Conf Sec 2'][0];
	response_structure.ts = CS2.ts;
	res.status(200).send(response_structure);
});

app.get("/Confirmacion/Secadora3", (req, res) => {
	CS3 = JSON.parse(CS3);
	response_structure.data.Etapa = "Secadora3";
	response_structure.data.Tag = CS3.d['Conf Sec 3'][0];
	response_structure.ts = CS3.ts;
	res.status(200).send(response_structure);
});

app.get("/Confirmacion/Secadora4", (req, res) => {
	CS4 = JSON.parse(CS4);
	response_structure.data.Etapa = "Secadora4";
	response_structure.data.Tag = CS4.d['Conf Sec 4'][0];
	response_structure.ts = CS4.ts;
	res.status(200).send(response_structure);
});

app.get("/Confirmacion/Secadora5", (req, res) => {
	CS5 = JSON.parse(CS5);
	response_structure.data.Etapa = "Secadora5";
	response_structure.data.Tag = CS5.d['Conf Sec 5'][0];
	response_structure.ts = CS5.ts;
	res.status(200).send(response_structure);
});

app.get("/Confirmacion/Secadora6", (req, res) => {
	CS6 = JSON.parse(CS6);
	response_structure.data.Etapa = "Secadora6";
	response_structure.data.Tag = CS6.d['Conf Sec 6'][0];
	response_structure.ts = CS6.ts;
	res.status(200).send(response_structure);
});

app.get("/Confirmacion/Secadora7", (req, res) => {
	CS7 = JSON.parse(CS7);
	response_structure.data.Etapa = "Secadora7";
	response_structure.data.Tag = CS7.d['Conf Sec 7'][0];
	response_structure.ts = CS7.ts;
	res.status(200).send(response_structure);
});

app.get("/Confirmacion/Secadora8", (req, res) => {
	CS8 = JSON.parse(CS8);
	response_structure.data.Etapa = "Secadora8";
	response_structure.data.Tag = CS8.d['Conf Sec8'][0];
	response_structure.ts = CS8.ts;
	res.status(200).send(response_structure);
});

app.get("/Confirmacion/Secadora9", (req, res) => {
	CS9 = JSON.parse(CS9);
	response_structure.data.Etapa = "Secadora9";
	response_structure.data.Tag = CS9.d['Conf Sec 9'][0];
	response_structure.ts = CS9.ts;
	res.status(200).send(response_structure);
});

app.get("/Confirmacion/Secadora10", (req, res) => {
	CS10 = JSON.parse(CS10);
	response_structure.data.Etapa = "Secadora10";
	response_structure.data.Tag = CS10.d['Conf Sec 10'][0];
	response_structure.ts = CS10.ts;
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
