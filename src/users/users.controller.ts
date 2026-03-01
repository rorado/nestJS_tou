import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // get (~api/users)
  @Get()
  public getAllUsers() {
    return this.usersService.getAllUsers();
  }
  @Post() public createUser(@Body() newUser: CreateUserDto) {
    return this.usersService.createUser(newUser);
  }
}
