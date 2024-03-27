import { IsDate, IsEmail, IsNotEmpty, isNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsDate()
  createdDate: Date;
}
