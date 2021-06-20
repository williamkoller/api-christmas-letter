import { User } from '@/infra/database/entities/user/user.entity';
import { Message } from '@/utils/types/message/message.type';
import { EntityRepository, Repository } from 'typeorm';
import { UpdateUserDto } from '@/modules/user/dtos/update-user/update-user.dto';

@EntityRepository(User)
export class UpdateUserRepository extends Repository<User> {
  async updateUser({
    id,
    name,
    surname,
    email,
    password,
  }: UpdateUserDto): Promise<void> {
    await this.update(id, { name, surname, email, password });
  }
}
