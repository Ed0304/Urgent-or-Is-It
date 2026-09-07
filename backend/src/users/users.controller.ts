import {
    Controller,
    Get,
    Param,
    Post,
    ParseIntPipe,
    UseGuards,
    Req,
} from "@nestjs/common";

import { UsersService } from "./users.service";
import { JwtGuard } from "../auth/guards/jwt/jwt.guard";
import type { Request } from "express";

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':username')
  async findByUsername(@Param('username') username: string) {
    return this.usersService.findByUsername(username);
  }

  @Get(':email')
  async findByEmail(@Param('email') email:string){
    return this.usersService.findByEmail(email);
  }
  
  @Post("story-progress/:levelId")
  @UseGuards(JwtGuard)
  async completeStoryLevel(
      @Req() request: Request & {
          user: {
              sub: string;
          };
      },
      @Param("levelId", ParseIntPipe) levelId: number,
  ) {

      const userId = (request.user as any).sub;

      return this.usersService.completeStoryLevel(
          userId,
          levelId,
      );

  }
  
}

