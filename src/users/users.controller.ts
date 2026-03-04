import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginUserDto } from './dtos/login.dto';

@Controller('/user/auth/')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * get ('~/api/user')
   * @returns all users
   */
  @Get()
  public getAllUsers() {
    return this.usersService.getAllUsers();
  }

  /**
   * post ('~/api/user/register')
   * @param newUser - the user to create
   * @returns the created user
   */
  @Post('register') public createUser(@Body() newUser: CreateUserDto) {
    return this.usersService.createUser(newUser);
  }

  /**
   * post ('~/api/user/login')
   * @param email - the email of the user to login
   * @param password - the password of the user to login
   * @returns the logged in user
   */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  public loginUser(@Body() { email, password }: LoginUserDto) {
    return this.usersService.loginUser(email, password);
  }
}
