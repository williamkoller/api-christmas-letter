import { User } from '@/infra/database/entities/user/user.entity';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddUserDto } from '../dtos/add-user/add-user.dto';
import { AddUserService } from '../services/add-user/add-user.service';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly addUserService: AddUserService) {}

  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'This email is already being used.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Add new user.',
  })
  @Post('/add-user')
  async addUser(
    @Body() { name, surname, email, password }: AddUserDto,
  ): Promise<User> {
    return await this.addUserService.addUser({
      name,
      surname,
      email,
      password,
    });
  }
}
