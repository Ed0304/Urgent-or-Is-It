import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { User, UserSchema } from './users.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({

    imports: [

        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema,
            },
        ]),

        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                secret: configService.get<string>('JWT_SECRET'),
                signOptions: {
                    expiresIn: '1h',
                },
            }),
        }),

    ],

    providers: [
        UsersService,
    ],

    controllers: [
        UsersController,
    ],

    exports: [
        UsersService,
    ],

})
export class UsersModule {}