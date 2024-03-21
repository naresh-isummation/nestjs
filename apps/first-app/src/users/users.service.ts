import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
const userObj = [];
@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    createUserDto['id'] = userObj.length + 1;
    userObj.push(createUserDto);
    return createUserDto;
  }

  findAll() {
    return userObj;
  }

  findOne(id: number) {
    return userObj.filter((currentValue) => currentValue.id === id);
    //return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const objIndex = userObj.findIndex(
      (currentValue) => currentValue.id === id,
    );
    console.log('objIndex ', objIndex);
    if (objIndex === -1) {
      return 'No record Found';
    } else {
      for (const key in updateUserDto) {
        userObj[objIndex][key] = updateUserDto[key];
      }
      return userObj[objIndex];
    }
  }

  remove(id: number) {
    const objIndex = userObj.findIndex(
      (currentValue) => currentValue.id === id,
    );
    if (objIndex === -1) {
      return 'No record Found';
    } else {
      return userObj.splice(objIndex, 1)[0];
    }
    //return `This action removes a #${id} user`;
  }
}
