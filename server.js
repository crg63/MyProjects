const express = require('express');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

 
//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  
// var express = require('express');
 
// Nous définissons ici les paramètres du serveur.
// var hostname = 'localhost'; 
 
// La variable mongoose nous permettra d'utiliser les fonctionnalités du module mongoose.
var mongoose = require('mongoose'); 
// Ces options sont recommandées par mLab pour une connexion à la base
// var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
// replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
 
//URL de notre base
const urlmongo = "mongodb://florian:fsimpson78@ds139219.mlab.com:39219/projects"
 
// Nous connectons l'API à notre base de données
// mongoose.connect(urlmongo, options);
 
// var db = mongoose.connection; 
// db.on('error', console.error.bind(console, 'Erreur lors de la connexion')); 
// db.once('open', function (){
//     console.log("Connexion à la base OK"); 
// }); 

const app = express();

var bodyParser = require("body-parser"); 
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// MongoClient.connect(urlmongo, (err, db) => {
// 	if (err) {
// 		return console.log("Fail",err)
// 	}
// 	if (db) {
// 				return console.log(db)

// 	}

// 	db.collection('notes').insertOne(
// 	{
// 		title: 'Hello MongoDB',
// 		text: 'Hopefully this works!'
// 	},
// 	function (err, res) {
// 			if (err) {
// 				db.close();
// 				return console.log(err);
// 			}
// 			if (res) {
// 				return console.log("CONNECTED")
// 			}
// 			// Success
// 			db.close();
// 		}
// 	)
// });

var projectSchema =  mongoose.Schema({
	title: String,
	pour: String,
	avec: String,
	description: String,
	img: { data: Buffer, contentType: String },
	apploseNb: 0
})

var db

MongoClient.connect(urlmongo, (err, client) => {
	if (err) return console.log(err)
	db = client.db('projects') // whatever your database name is
	app.listen(3001, () => {
		console.log('listening on 3001')
	})  
})

app.post('/projects', (req, res) => {
	db.collection('projects').save(req.body, (err, result) => {
		console.log(req.body)
		if (err) return console.log(err)
		console.log('saved to database')
		res.redirect('/#/Contact')
	})
})


app.get('/', (req, res) => {
	var cursor = db.collection('projects').find()
})

// db.collection('projects').find().toArray(function(err, results) {
//   console.log(results)
//   // send HTML file populated with quotes here
// })

// var Project = mongoose.model('Project', contactSchema)






const port = process.env.PORT || 5000;
// add a document to the DB collection recording the click event

app.post('/clicked', (req, res) => {
	const click = {apploseNb: new Date()};
	console.log(click);
	// console.log(db);

	db.collection('projects').updateOne({ a : 2 }
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  }); 
  
	db.collection('projects').save(click, (err, result) => {
		if (err) {
			return console.log(err);
		}
		console.log('click added to db');
		res.sendStatus(201);
	});
});

// get the click data from the database
app.get('/clicks', (req, res) => {
	db.collection('clicks').find().toArray((err, result) => {
		if (err) return console.log(err);
		res.send(result);
	});
});

// let rawdata = fs.readFileSync('projects.json');  
var projects = JSON.parse(fs.readFileSync('projects.json'));  

app.get('/data/projects', (req, res) => {
	res.send({projects});
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(‘/’, express.static(`${__dirname}/client/build`));
  // app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

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