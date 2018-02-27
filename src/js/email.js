var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'floriancrg@gmail.com',
		pass: 'fsimpson'
	}
});

var mailOptions = {
	from: 'floriancrg@gmail.com',
	to: 'floriancargouet@gmail.com',
	subject: 'CRG WEB SITE',
	text: 'FROM: '
};

transporter.sendMail(mailOptions, function(error, info){
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}
});