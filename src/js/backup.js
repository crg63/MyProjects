var express = require('express'),
swig =  require('swig');
mailer =  require('express-mailer'),
path = require('path'),
app = express();

app.use(express.logger())


console.log('ok')