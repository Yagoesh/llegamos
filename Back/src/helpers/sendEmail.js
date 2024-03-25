const nodemailer = require("nodemailer")
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = require("../../env.js")

async function sendEmail (mail , subject , text ){
  const transporter =  nodemailer.createTransport({
    host: SMTP_HOST,
    port:SMTP_PORT,
    auth: {
      user:SMTP_USER,
      pass:SMTP_PASS
    }
  })
 try {
await transporter.sendMail({
  from:"<yogeshsamtani@gmail.com>",
  to: mail, 
  subject: subject,
  html: text
})
  
 } catch (error) {
  console.error(error.message)
 }
}

module.exports = sendEmail