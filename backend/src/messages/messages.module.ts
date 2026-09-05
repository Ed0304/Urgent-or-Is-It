import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { MessagesController } from "./messages.controller";
import { MessagesService } from "./messages.service";

import {
    Email,
    EmailSchema
} from "./email/email.schema";

import {
    SMS,
    SMSSchema
} from "./sms/sms.schema";

//Inside MessagesModule, I want to be able to inject the Mongoose models for Email and SMS.
@Module({

    imports: [

        MongooseModule.forFeature([
            {
                name: Email.name,
                schema: EmailSchema,
            },

            {
                name: SMS.name,
                schema: SMSSchema,
            },
        ]),

    ],

    controllers: [
        MessagesController
    ],

    providers: [
        MessagesService
    ],

})
export class MessagesModule {}