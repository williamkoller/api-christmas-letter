import { Card } from '@/infra/database/entities/card/card.entity';
import { EntityRepository, Repository } from 'typeorm';
import { UpdateCardDto } from '../../dtos/update-card/update-card.dto';

@EntityRepository(Card)
export class UpdateCardRepository extends Repository<Card> {
  async updateCard({
    id,
    title,
    description,
    destiny,
    date,
  }: UpdateCardDto): Promise<void> {
    await this.update(id, { title, description, destiny, date });
  }
}
