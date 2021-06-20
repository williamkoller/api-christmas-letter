import { User } from '@/infra/database/entities/user/user.entity';
import { LoadByIdDto } from '@/modules/user/dtos/load-by-id/load-by-id.dto';
import { LoadUserByIdRepository } from '@/modules/user/repositories/load-user-by-id/load-user-by-id.repository';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class LoadUserByIdService {
  constructor(
    private readonly loadUserByIdRepository: LoadUserByIdRepository,
  ) {}

  async loadById({ id }: LoadByIdDto): Promise<User> {
    try {
      const user = await this.loadUserByIdRepository.LoadById({ id });

      if (!user) {
        throw new NotFoundException('User not found.');
      }

      return user;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
