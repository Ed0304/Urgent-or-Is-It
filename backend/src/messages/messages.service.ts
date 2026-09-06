import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import {
    Email,
    EmailDocument
} from "./email/email.schema";

import {
    SMS,
    SMSDocument
} from "./sms/sms.schema";


@Injectable()
export class MessagesService {

    constructor(

        @InjectModel(Email.name)
        private readonly emailModel: Model<EmailDocument>,

        @InjectModel(SMS.name)
        private readonly smsModel: Model<SMSDocument>,

    ) {}


    async getLevelMessages(
        chapter: number,
        level: number
    ) {

        const emails = await this.emailModel
            .find({
                chapter,
                level,
                message_type : "Email"
            })
            .lean();

        const sms = await this.smsModel
            .find({
                chapter,
                level,
                message_type : "SMS"
            })
            .lean();


        const messages = [

            ...emails.map((email) => ({
                ...email,
                messageType: "Email" as const,
            })),

            ...sms.map((sms) => ({
                ...sms,
                messageType: "SMS" as const,
            })),

        ];


        messages.sort(
            (a, b) => a.order - b.order
        );


        return messages;
    }
}