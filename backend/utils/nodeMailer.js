import nodemailer from 'nodemailer'
const MAIL_CRED = {
    user : muhammadhaseebshariff,
    pass : haseeb,
    host : smtp.ipage.com ,
    port : 587
};

const transporter = nodemailer.createTransport({
  
    host: MAIL_CRED.host,
    port: MAIL_CRED.port,
    secure: (MAIL_CRED.port == 465) ? true : false, // true for 465, false for other ports
    auth: {
        user: MAIL_CRED.user,
        pass: MAIL_CRED.pass,
    },
})

export default transporter;