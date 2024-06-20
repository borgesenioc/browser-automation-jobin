const nodemailer = require('nodemailer');

async function sendErrorNotification(error) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.NOTIFY_EMAIL,
    subject: 'Jobin Automation Error',
    text: `An error occurred: ${error.message}`,
  };

  await transporter.sendMail(mailOptions);
}

module.exports = { sendErrorNotification };
