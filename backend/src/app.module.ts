import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    // Loads configuration from .env and makes it available across the application
    ConfigModule.forRoot({isGlobal:true}),

    // Connects the NestJS application to MongoDB through Mongoose
    MongooseModule.forRoot(process.env.MONGODB_URI!),

    UsersModule,

    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
