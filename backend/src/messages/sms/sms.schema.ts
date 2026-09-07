import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type SMSDocument = HydratedDocument<SMS>;

@Schema({ timestamps: true ,collection: "messages" })
export class SMS {

    // Identifier used by the app to determine which levels the user has completed.
    @Prop({ required: true, type: Number })
    level_id!: number;

    @Prop({ required: true, type: String, default:"SMS"})
    message_type!: string

    @Prop({ required: true, type: String })
    sender!: string;

    @Prop({ required: true, type: String })
    message!: string;

    @Prop({ required: true, type: Number })
    level!: number;

    @Prop({ required: true, type: Number })
    chapter!: number;

    @Prop({ required: true, type: Number })
    order!: number;

    @Prop({ required: true, type: Boolean })
    legit!: boolean;
}

export const SMSSchema = SchemaFactory.createForClass(SMS);