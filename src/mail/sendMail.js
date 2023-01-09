import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export function sendMail(emailPath, messageFn, subject, text) {
  const transport = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      user: process.env.userMail,
      pass: process.env.passMail,
    },
  });

  const sendMailForVerify = {
    from: `from ${process.env.userMail}`,
    to: emailPath,
    subject: subject,
    text: text,
    html: messageFn(emailPath),
  };
  transport.sendMail(sendMailForVerify, function (error, result) {
    if (error) {
      console.log("Error: ", error);
    } else {
      console.log("send a message");
    }
    transport.close();
  });
}
