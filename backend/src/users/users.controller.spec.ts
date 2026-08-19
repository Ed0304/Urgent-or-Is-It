import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users') //Sets the base url /users
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':username') //Uses the GET REST API
  async findByUsername(@Param('username') username: string) {
    return this.usersService.findByUsername(username);
  }
}