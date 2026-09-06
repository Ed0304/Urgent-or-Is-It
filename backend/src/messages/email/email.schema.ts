import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type EmailDocument = HydratedDocument<Email>;

@Schema({ timestamps: true ,collection: "messages"})
export class Email {

    @Prop({ required: true, type: String, default:"Email"})
    message_type!: string

    @Prop({ required: true, type: String })
    sender!: string;

    @Prop({ required: true, type: String })
    subject!: string;

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

    @Prop({ required: false, type: String })
    linkText?: string;

    @Prop({ required: false, type: String })
    linkUrl?: string;
}

export const EmailSchema = SchemaFactory.createForClass(Email);