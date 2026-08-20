import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from './guards/jwt/jwt.guard';
import { Get, Req } from '@nestjs/common';
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('register')
    register(@Body() registerDto:RegisterDto){
        return this.authService.register(registerDto);
    }

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(
            loginDto.username,
            loginDto.password,
        );
    }

    @Get('profile')
    @UseGuards(JwtGuard)
    profile(@Req() request: any) {
        return request.user;
    }
}
