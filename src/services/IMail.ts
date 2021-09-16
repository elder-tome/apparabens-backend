interface IMail {

  sendMail(
    from: string, 
    to: string, 
    subject: string, 
    html: string
  ): void;

  getUser(): string;

}

export default IMail;