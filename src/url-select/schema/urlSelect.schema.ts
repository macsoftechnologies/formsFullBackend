import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsOptional } from 'class-validator';

export class addmore{
    addmore:string
}

export class allow{
    Urls:urls[]
}

export class urls{
    urls:string
}


export class deny{
    DenyUrls:denyurls[]
}

export class denyurls{
    Denyurl:string
}
// export class values{
//    values:UrlValues
// }

// export class UrlValues{
//     Values:string
//     status:string
// }
@Schema({ timestamps: true })
export class urlSelect extends Document{
   
    // @Prop()
    // urlValues: values[]
    @Prop()
    allow:allow
    @Prop()
    deny:deny
     @Prop()
    AddMore: addmore[]
    
}
export const  urlSelectSchema = SchemaFactory.createForClass(urlSelect);
 
