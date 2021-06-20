import { Injectable, NotFoundException } from '@nestjs/common';
import { LoadAllUsersRepository } from '@/modules/user/repositories/load-all-users/load-all-users.repository';
import { User } from '@/infra/database/entities/user/user.entity';

@Injectable()
export class LoadAllUsersService {
  constructor(
    private readonly loadAllUsersRepository: LoadAllUsersRepository,
  ) {}

  async loadAll(): Promise<User[]> {
    const users = await this.loadAllUsersRepository.loadAll();

    if (!users.length) {
      throw new NotFoundException('No records found.');
    }

    return users;
  }
}
