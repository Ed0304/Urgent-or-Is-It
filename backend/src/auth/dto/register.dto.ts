import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
// What is a DTO? 
// DTO stands for Data Transfer Object
// It is an object that carries data between processes
export class RegisterDto{
    @IsNotEmpty()
    username!:string;

    @IsEmail()
    email!:string;

    @IsNotEmpty()
    @MinLength(8)
    password!:string;

}