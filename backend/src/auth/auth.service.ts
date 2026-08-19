import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from 'src/users/users.service';
import { ConflictException, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor (private readonly usersService : UsersService ,private readonly jwtService: JwtService){}
    async register(registerDto: RegisterDto){
        const existingUser = await this.usersService.findByUsername(registerDto.username)
        const existingEmail = await this.usersService.findByEmail(registerDto.email)
        if(existingUser){
            throw new ConflictException("Username already exists");
        }

        if(existingEmail){
            throw new ConflictException("Email already exists");
        }

        const passwordHash = await bcrypt.hash(registerDto.password,10)
        
        const user = await this.usersService.create(
            registerDto.username,
            registerDto.email,
            passwordHash
        );

         return {
            message: 'Registration successful',
            username: user.username,
            email: user.email,
        };
    }

    async login(username: string, password: string) {
        const user = await this.usersService.findByUsername(username);

        if (!user) {
            throw new UnauthorizedException('Invalid username or password');
        }

        const passwordMatches = await bcrypt.compare(
            password,
            user.passwordHash,
        );

        if (!passwordMatches) {
            throw new UnauthorizedException('Invalid username or password');
        }

        const payload = {
            sub: user._id.toString(),
            username: user.username,
        };

        const accessToken = await this.jwtService.signAsync(payload);

        return {
            message: 'Login successful',
            access_token: accessToken,
        };
    }
}
