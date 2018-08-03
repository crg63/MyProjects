const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

// let rawdata = fs.readFileSync('projects.json');  
var projects = JSON.parse(fs.readFileSync('projects.json'));  

app.get('/data/projects', (req, res) => {
	res.send({  projects});
	console.log(projects);  
});

app.listen(port, () => console.log(`Listening on port ${port}`));