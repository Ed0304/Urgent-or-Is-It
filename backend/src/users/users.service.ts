import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// @Injectable -> Hey NestJS dependency-injection system,
// you can create and manage instances of this class for me!
import {User, UserDocument} from './users.schema'
import bcrypt from "bcrypt";
import { hash } from 'crypto';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name)
        private userModel: Model<UserDocument>
    ) {}

    async findByUsername(username:string): Promise<UserDocument|null> {
        return this.userModel.findOne({ username }).exec()
    }

    async findByEmail(email:string): Promise<UserDocument|null>{
        return this.userModel.findOne({email}).exec()
    }

    async create(username:string, email:string, passwordHash: string, highScore: number,storyLevelsCompleted: number[] ){
        const user = new this.userModel({
            username, email, passwordHash,highScore,storyLevelsCompleted
        })
        return user.save()
    }
}
