var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shivam.pspl123@gmail.com',
    pass: 'PSPL@123'
  }
});

var mailOptions = {
  from: 'shivam.pspl123@gmail.com',
  to: 'shivam.pspl123@gmail.com',
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