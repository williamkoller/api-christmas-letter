import { User } from '@/infra/database/entities/user/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { LoadEmailDto } from '@/modules/user/dtos/load-by-email/load-by-email.dto';

@EntityRepository(User)
export class LoadUserByEmailRepository extends Repository<User> {
  async loadByEmail({ email }: LoadEmailDto): Promise<User> {
    return await this.findOne({ email });
  }
}
