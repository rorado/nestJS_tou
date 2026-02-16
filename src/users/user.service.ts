import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

Injectable();
export class UsersService {
  users = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' },
  ];
  public getAllUsers() {
    return this.users;
  }

  public createUser(user: CreateUserDto) {
    if (!user.name || !user.email) {
      return { message: 'Name and email are required' };
    }
    const newUser = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);
    return { message: 'User created successfully', user: newUser };
  }

  public getUserById(id: number) {
    const user = this.users.find((user) => user.id == id);
    if (!user) throw new NotFoundException('Product not found');
    return user;
  }
}
