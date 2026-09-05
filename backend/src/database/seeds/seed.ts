import "dotenv/config";
import mongoose from "mongoose";

import { seedEmails } from "./email.seed";
import { seedSMS } from "./sms.seed";


async function seed() {

    try {

        await mongoose.connect(
            process.env.MONGODB_URI!
        );

        console.log("Connected to MongoDB.");

        await seedEmails();

        await seedSMS();

        console.log("Database seeding completed.");

    } catch (error) {

        console.error(
            "Database seeding failed:",
            error
        );

        process.exit(1);

    } finally {

        await mongoose.disconnect();

        console.log("Disconnected from MongoDB.");

    }

}


seed();