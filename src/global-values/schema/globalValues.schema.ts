import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { IsOptional } from 'class-validator';

// export class addmore{
//     addmore:string
// }

// export class values{
//    values:GlobalValue
// }

// export class GlobalValue{
//     Values:string
//     status:string
// }

export class allow{
    Global:global[]
}

export class global{
    global:string
}


export class deny{
    DenyGlobal:denyglobal[]
}

export class denyglobal{
    Denyglobal:string
}
@Schema({ timestamps: true })
export class GlobalValues extends Document{
   
    @Prop()
    allow:allow
    @Prop()
    deny:deny
    // @Prop()
    // globalValue: values[]
    
    //  @Prop()
    // AddMore: addmore[]
    
}
export const  GlobalValuesSchema = SchemaFactory.createForClass(GlobalValues);
 
