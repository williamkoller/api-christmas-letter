import { Card } from '@/infra/database/entities/card/card.entity';
import { LoadByIdDto } from '@/utils/dtos/load-by-id/load-by-id.dto';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Card)
export class LoadCardByIdRepository extends Repository<Card> {
  async loadById({ id }: LoadByIdDto): Promise<Card> {
    return await this.findOne(id);
  }
}
