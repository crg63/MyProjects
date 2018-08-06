var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

var projectSchema = new Schema({
	title: String,
	pour: String,
	avec: String,
	description: String,
	img: { data: Buffer, contentType: String }

})
