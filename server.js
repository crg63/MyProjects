const express = require('express');
const fs = require('fs');
// const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = process.env.PORT || 5000;

// let rawdata = fs.readFileSync('projects.json');  
var projects = JSON.parse(fs.readFileSync('projects.json'));  

app.get('/data/projects', (req, res) => {
	res.send({  projects});
	console.log(projects);  
});

app.listen(port, () => console.log(`Listening on port ${port}`));



// MongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
//   if (err) {
//     throw err;
//   }
//   db.collection('mammals').find().toArray(function(err, result) {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//   });
// });