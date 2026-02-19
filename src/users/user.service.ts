import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserEntity } from './users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  public getAllUsers() {
    return this.userRepository.find();
  }

  public async createUser(user: CreateUserDto) {
    const isEmailExist = await this.userRepository.findOneBy({
      email: user.email,
    });
    if (isEmailExist) {
      throw new BadRequestException('Email already exists');
    }
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  public async getUserById(id: string) {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
