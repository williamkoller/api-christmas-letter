import { Injectable, NotFoundException } from '@nestjs/common';
import { UserProfileType } from '@/modules/user/types/user-profile/user-profile.type';
import { LoadByIdDto } from '@/modules/user/dtos/load-by-id/load-by-id.dto';
import { LoadUserByIdRepository } from '@/modules/user/repositories/load-user-by-id/load-user-by-id.repository';

@Injectable()
export class LoadUserProfileService {
  constructor(
    private readonly loadUserByIdRepository: LoadUserByIdRepository,
  ) {}

  async loadProfile({ id }: LoadByIdDto): Promise<UserProfileType> {
    const user = await this.loadUserByIdRepository.LoadById({ id });

    if (!user) {
      throw new NotFoundException('USer not found.');
    }

    const userProfileType: UserProfileType = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };

    return userProfileType;
  }
}
