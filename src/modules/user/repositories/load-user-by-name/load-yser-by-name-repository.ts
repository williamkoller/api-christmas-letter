import { User } from '@/infra/database/entities//user/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { LoadNameDto } from '@/modules/user/dtos/load-by-name/load-by-name.dto';

@EntityRepository(User)
export class LoadUserByNameRepository extends Repository<User> {
  async loadByName({ name }: LoadNameDto): Promise<User[]> {
    return await this.createQueryBuilder('users')
      .where(`(name) ILIKE :name`, { name: `%${name}%` })
      .getMany();
  }
}
