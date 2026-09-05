import mongoose from "mongoose";

import {
    SMS,
    SMSSchema,
} from "../../messages/sms/sms.schema";


const smsSeedData = [

    {
        sender:
            "PuraTrust",

        message:
            "PuraTrust: We detected an attempted login to your account from an unrecognized device.\n\n" +
            "If this wasn't you, secure your account immediately:\n" +
            "https://puratrust-security.example/secure\n\n" +
            "PuraTrust Security",

        chapter: 1,
        level: 2,        order: 1,

        legit: false,
    },

    {
        sender:
            "PuraTrust",

        message:
            "PuraTrust: Your payment of $42.80 at Greenway Market was successfully processed.\n\n" +
            "If you do not recognize this transaction, sign in to the PuraTrust app to review your account activity.",

        chapter: 1,
        level: 2,
        order: 2,

        legit: true,
    },

    {
        sender:
            "PuraTrust Support",

        message:
            "PuraTrust Support: Your account will be temporarily locked unless your identity is confirmed.\n\n" +
            "Reply with your date of birth and the last 4 digits of your card to complete verification.\n\n" +
            "This request will expire today.",

        chapter: 1,
        level: 2,
        order: 3,

        legit: false,
    },

];


export async function seedSMS() {

    const SMSModel =
        mongoose.models.SMS ||
        mongoose.model(SMS.name, SMSSchema);


    for (const sms of smsSeedData) {

        await SMSModel.updateOne(

            {
                chapter: sms.chapter,
                level: sms.level,
                order: sms.order,
            },

            {
                $set: sms,
            },

            {
                upsert: true,
            }

        );

    }


    console.log(
        "SMS seed completed successfully."
    );

}