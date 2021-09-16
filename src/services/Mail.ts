import * as nodemailer from 'nodemailer';
import IMail from './IMail';

export default class Mail implements IMail{
  
  private user: string;
  private password: string;

  constructor(user: string, password: string) {
    this.user = user;
    this.password = password;
  }

  sendMail(from: string, to: string, subject: string, html: string) {

    const mailOptions = {
      from,
      to,
      subject,
      html
    };

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.user,
        pass: this.password
      }
    });

    transporter.sendMail(mailOptions, error => {
      if (error) {
        console.log(error);
      }
    });

  }

  getUser() {
    return this.user;
  }

}
