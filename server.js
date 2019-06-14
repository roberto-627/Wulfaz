const express = require('express');
const app = express();

const data = require("./endpoints.json");

for (let index = 0; index < data.endpoints.length; index++) {
	const element = data.endpoints[index];
	app.get(element.url, (req, res) => {
		res.send(element.response);
  });
  
}

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});