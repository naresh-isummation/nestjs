import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const user = this.usersService.findOne(+id);
    if (!user) {
      throw new HttpException('No record Found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = this.usersService.findOne(+id);
    if (!user) {
      throw new HttpException('No record Found', HttpStatus.NOT_FOUND);
    } else {
      return this.usersService.update(+id, updateUserDto);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const user = this.usersService.findOne(+id);
    if (!user) {
      throw new HttpException('No record Found', HttpStatus.NOT_FOUND);
    } else {
      return this.usersService.remove(+id);
    }
  }
}
