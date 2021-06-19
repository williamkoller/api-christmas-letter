import { User } from '@/infra/database/entities/user/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { LoadByIdDto } from '../../dtos/load-by-id/load-by-id.dto';

@EntityRepository(User)
export class LoadUserByIdRepository extends Repository<User> {
  async LoadByIdDto({ id }: LoadByIdDto): Promise<User> {
    return await this.findOne(id);
  }
}
