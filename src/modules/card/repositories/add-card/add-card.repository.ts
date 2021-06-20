import { Card } from '@/infra/database/entities/card/card.entity';
import { EntityRepository, Repository } from 'typeorm';
import { AddCardDto } from '@/modules/card/dtos/add-card/add-card.dto';

@EntityRepository(Card)
export class AddCardRepository extends Repository<Card> {
  async add({ title, description, destiny, date }: AddCardDto): Promise<Card> {
    const newCard = this.create({ title, description, destiny, date });
    return await this.save(newCard);
  }
}
