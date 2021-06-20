import { Card } from '@/infra/database/entities/card/card.entity';
import { EntityRepository, Repository } from 'typeorm';
import { LoadByTitleDto } from '../../dtos/load-by-title/load-by-title.dto';

@EntityRepository(Card)
export class LoadCardByTitleRepository extends Repository<Card> {
  async loadByTitle({ title }: LoadByTitleDto): Promise<Card[]> {
    return await this.createQueryBuilder('cards')
      .where(`(title) ILIKE :title`, { title: `%${title}%` })
      .getMany();
  }
}
