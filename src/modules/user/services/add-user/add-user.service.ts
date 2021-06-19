import { User } from '@/infra/database/entities/user/user.entity';
import { ConflictException, Injectable } from '@nestjs/common';
import { AddUserDto } from '@/modules/user/dtos/add-user/add-user.dto';
import { AddUserRepository } from '@/modules/user/repositories/add-user/add-user-repository';
import { LoadUserByEmailRepository } from '@/modules/user/repositories/load-user-by-email/load-user-by-email.repository';

@Injectable()
export class AddUserService {
  constructor(
    private readonly addUserRepository: AddUserRepository,
    private readonly loadUserByEmailReposirory: LoadUserByEmailRepository,
  ) {}

  async addUser({ name, surname, email, password }: AddUserDto): Promise<User> {
    const user = await this.loadUserByEmailReposirory.loadByEmail({ email });

    if (user) {
      throw new ConflictException('This email is already being used.');
    }

    return await this.addUserRepository.add({ name, surname, email, password });
  }
}
