import { Message } from '@/utils/types/message/message.type';
import { LoadByIdDto } from '@/utils/dtos/load-by-id/load-by-id.dto';
import { DeleteUserRepository } from '@/modules/user/repositories/delete-user/delete-user.repository';
import { LoadUserByIdService } from '@/modules/user/services/load-user-by-id/load-user-by-id.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DeleteUserService {
  constructor(
    private readonly loadUserByIdService: LoadUserByIdService,
    private readonly deleteUserRepository: DeleteUserRepository,
  ) {}

  async deleteUser({ id }: LoadByIdDto): Promise<Message> {
    const { id: userId } = await this.loadUserByIdService.loadById({ id });

    await this.deleteUserRepository.deleteUser({ id: userId });

    return {
      message: 'User deleted with successfully',
    };
  }
}
