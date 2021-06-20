import { User } from '@/infra/database/entities/user/user.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { LoadByIdDto } from '@/utils/dtos/load-by-id/load-by-id.dto';
import { LoadUserByIdRepository } from '@/modules/user/repositories/load-user-by-id/load-user-by-id.repository';

@Injectable()
export class LoadUserIdToAuthService {
  constructor(
    private readonly loadUserByIdRepository: LoadUserByIdRepository,
  ) {}

  async loadUserIdToAuth({ id }: LoadByIdDto): Promise<User> {
    const userAuthId = await this.loadUserByIdRepository.LoadById({ id });

    if (!userAuthId) {
      throw new NotFoundException('User not found.');
    }

    return userAuthId;
  }
}
