import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import {HydratedDocument} from "mongoose"
import { timestamp } from "rxjs"
// @Prop -> Tells Mongoose this property is a field in the MongoDB document
// @Schema -> Defines the MongoDB document structure through a TypeScript class
// HydratedDocument -> Represents a document with Mongoose's document functionality.

export type UserDocument = HydratedDocument<User>

@Schema({timestamps:true })
export class User{
    @Prop({ required: true, unique: true})
    username!: string;

    @Prop({ required: true, unique: true})
    email!:string;

    @Prop({ required: true })
    passwordHash!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
