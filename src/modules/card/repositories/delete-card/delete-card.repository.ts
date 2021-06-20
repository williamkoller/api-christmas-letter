import { Card } from '@/infra/database/entities/card/card.entity';
import { LoadByIdDto } from '@/utils/dtos/load-by-id/load-by-id.dto';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Card)
export class DeleteCardRepository extends Repository<Card> {
  async deleteCard({ id }: LoadByIdDto): Promise<void> {
    await this.delete(id);
  }
}
