import mongoose from "mongoose";

import {
    Email,
    EmailSchema,
} from "../../messages/email/email.schema";


const emailSeedData = [

    {
        sender: "notificat10ns@Pura1rust.com",

        subject:
            "Important: Verify Your PuraTrust Account",

        message:
            "Hello,\n\n" +
            "We detected unusual activity associated with your PuraTrust account.\n\n" +
            "To prevent interruptions to your account, please verify your account information as soon as possible.\n\n" +
            "Thank you,\n" +
            "PuraTrust Security Team",

        linkText:
            "Verify Account",

        linkUrl:
            "https://puratrust-account.example/verify",

        chapter: 1,
        level: 1,
        order: 1,

        legit: false,
    },

    {
        sender: "notifications@PuraTrust.com",

        subject:
            "Your Monthly Account Statement Is Ready",

        message:
            "Hello,\n\n" +
            "Your monthly PuraTrust account statement is now available.\n\n" +
            "You can review your statement by signing in to your PuraTrust account.\n\n" +
            "Thank you,\n" +
            "PuraTrust",

        linkText:
            "View Statement",

        linkUrl:
            "https://www.PuraTrust.com/account/statements",

        chapter: 1,
        level: 1,
        order: 2,

        legit: true,
    },

    {
        sender: "n0-reply@PuraTrust.com",

        subject:
            "Action Required: Security Verification",

        message:
            "Hello,\n\n" +
            "As part of a routine security check, your account requires verification.\n\n" +
            "Please complete the verification process within 24 hours to avoid temporary restrictions on your account.\n\n" +
            "PuraTrust Security",

        linkText:
            "Continue Verification",

        linkUrl:
            "https://PuraTrust-security.example/verify",

        chapter: 1,
        level: 1,
        order: 3,

        legit: false,
    },

];


export async function seedEmails() {

    const EmailModel =
        mongoose.models.Email ||
        mongoose.model(Email.name, EmailSchema);


    for (const email of emailSeedData) {

        await EmailModel.updateOne(

            {
                chapter: email.chapter,
                level: email.level,
                order: email.order,
            },

            {
                $set: email,
            },

            {
                upsert: true,
            }

        );

    }


    console.log(
        "Email seed completed successfully."
    );

}