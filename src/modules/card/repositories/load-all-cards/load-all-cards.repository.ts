import { Card } from '@/infra/database/entities/card/card.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Card)
export class LoadAllCarsRepository extends Repository<Card> {
  async loadAll(): Promise<Card[]> {
    return await this.find();
  }
}
