const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: "adl2022test@gmail.com",
    pass: "1234Aa@.",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const enviar = async (to, subject, html) => {
  return new Promise((resolve, reject) => {
    let mailOptions = {
      from: "jun.w4ng@gmail.com",
      to,
      subject,
      html,
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        reject(err);
        console.log(err);
      }
      if (data) {
        resolve(data);
        console.log(data);
      }
    });
  });
};

module.exports = enviar;
