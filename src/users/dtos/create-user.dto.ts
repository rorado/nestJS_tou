import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(2, 10)
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;
}
