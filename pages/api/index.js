// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import nodemailer from "nodemailer"

const handler = async(req, res) => {
  if(req.method === 'POST'){
    const { email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    })
  
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: [email,process.env.NODEMAILER_EMAIL],
      subject: subject,
      text: message,
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject:subject,
        html:message
      })
      return res.status(200).json({success:true});
    } catch (err) {
      return res.status(400).json({success:false});
    }

  }
}

export default handler;
