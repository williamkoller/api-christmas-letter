import { User } from '@/infra/database/entities/user/user.entity';
import { Message } from '@/utils/types/message/message.type';
import { EntityRepository, Repository } from 'typeorm';
import { LoadByIdDto } from '@/modules/user/dtos/load-by-id/load-by-id.dto';

@EntityRepository(User)
export class DeleteUserRepository extends Repository<User> {
  async deleteUser({ id }: LoadByIdDto): Promise<Message> {
    await this.delete(id);
    return {
      message: 'User deleted with successfully.',
    };
  }
}
