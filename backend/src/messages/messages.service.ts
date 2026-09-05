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
            })
            .lean();

        const sms = await this.smsModel
            .find({
                chapter,
                level,
            })
            .lean();


        // Combine Email and SMS messages
        const messages = [

            ...emails.map((email) => ({
                type: "email",
                ...email,
            })),

            ...sms.map((message) => ({
                type: "sms",
                ...message,
            })),

        ];


        // The order belongs to the level,
        // regardless of whether the message is Email or SMS.
        messages.sort((a, b) => a.order - b.order);


        return messages;
    }
}