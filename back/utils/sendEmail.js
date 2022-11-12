const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 587,
        auth: {
          user: "11e1a5f6e4bea6",
          pass: "8ea78d25e260a6"
        }
      });
    const mensaje={
        from: "Cars Store <11e1a5f6e4bea6>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;