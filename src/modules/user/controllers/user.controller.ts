import { User } from '@/infra/database/entities/user/user.entity';
import { Message } from '@/utils/types/message/message.type';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddUserDto } from '@/modules/user/dtos/add-user/add-user.dto';
import { UpdateUserDto } from '@/modules/user/dtos/update-user/update-user.dto';
import { AddUserService } from '@/modules/user/services/add-user/add-user.service';
import { DeleteUserService } from '@/modules/user/services/delete-user/delete-user.service';
import { UpdateUserService } from '@/modules/user/services/update-user/update-user.service';
import { LoadAllUsersService } from '@/modules/user/services/load-all-users/load-all-users.service';
import { LoadUserByIdService } from '@/modules/user/services/load-user-by-id/load-user-by-id.service';
import { ValidationParamsPipe } from '@/common/pipes/validation-params.pipe';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    private readonly addUserService: AddUserService,
    private readonly deleteUserService: DeleteUserService,
    private readonly updateUserService: UpdateUserService,
    private readonly loadAllUsersService: LoadAllUsersService,
    private readonly loadUserByIdService: LoadUserByIdService,
  ) {}

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

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User deleted with successfully.',
  })
  @Delete('/delete/:id')
  async delete(
    @Param('id', ValidationParamsPipe, ParseUUIDPipe) id: string,
  ): Promise<Message> {
    return await this.deleteUserService.deleteUser({ id });
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User updated with successfully.',
  })
  @Put('/update/:id')
  async updateUser(
    @Param('id', ValidationParamsPipe, ParseUUIDPipe) id: string,
    @Body() { name, surname, email }: UpdateUserDto,
  ): Promise<Message> {
    return await this.updateUserService.updateUser({
      id,
      name,
      surname,
      email,
    });
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User updated with successfully.',
  })
  @Put('/update-password/:id')
  async updatePassword(
    @Param('id', ValidationParamsPipe, ParseUUIDPipe) id: string,
    @Body() { password }: UpdateUserDto,
  ): Promise<Message> {
    return await this.updateUserService.updatePassword({ id, password });
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'No record found.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Load all users.',
  })
  @Get('/load-all')
  async loadAll(): Promise<User[]> {
    return this.loadAllUsersService.loadAll();
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'User not found.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Load user by id.',
  })
  @Get('/load-user-by-id/:id')
  async loadById(
    @Param('id', ValidationParamsPipe, ParseUUIDPipe) id: string,
  ): Promise<User> {
    return await this.loadUserByIdService.loadById({ id });
  }
}
