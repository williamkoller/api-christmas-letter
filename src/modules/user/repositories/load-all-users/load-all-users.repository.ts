import { User } from '@/infra/database/entities/user/user.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
export class LoadAllUsersRepository extends Repository<User> {
  async loadAll(): Promise<User[]> {
    return await this.find();
  }
}
