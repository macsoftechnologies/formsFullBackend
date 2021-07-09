import { SendGridService } from '@anchan828/nest-sendgrid';
import { Controller, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController{
    constructor(private mailService: MailService){}

    @MessagePattern(`notification-email`)
    async sendEmail(@Payload() data: any){
        await this.mailService.sendEmail(data.value.email,data.value.name);
    }
    
}