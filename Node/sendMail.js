
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  service: 'Gmail',
  auth: {
    user: 'shindesantoshram@gmail.com',
    pass: '$hivajiraje'
  }
});

var mailOptions = {
  from: 'shindesantoshram@gmail.com',
  to: 'shindesantoshram@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});