import nodemailer from "nodemailer"

export async function sendEmail(to, subject, html) {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: "the NIGGA", // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
  });
} 