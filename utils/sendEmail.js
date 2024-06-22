const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "pp3662504@gmail.com",
      pass: "xbxt pohy zouo bgjf",
    },
  });

  const mailOptions = {
    from: "pp3662504@gmail.com",
    to: options.to,
    subject: options.subject,
    text: options.text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
