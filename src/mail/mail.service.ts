import { SendGridService } from '@anchan828/nest-sendgrid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private sendGrid: SendGridService){}
    async sendEmail(email: string, name:string){
      await this.sendGrid.send({
        to: email,
        from: process.env.FROM_EMAIL,
        subject: "Accessing Your Registration",
        text: `You had been successfully registered ${name}`,
        html: `<strong>${name}, you are successfully created</strong>`,
      });
    }
    
}
