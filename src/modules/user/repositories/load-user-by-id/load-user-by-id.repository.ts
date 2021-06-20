import { User } from '@/infra/database/entities/user/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { LoadByIdDto } from '@/modules/user/dtos/load-by-id/load-by-id.dto';

@EntityRepository(User)
export class LoadUserByIdRepository extends Repository<User> {
  async LoadById({ id }: LoadByIdDto): Promise<User> {
    return await this.findOne(id);
  }
}
