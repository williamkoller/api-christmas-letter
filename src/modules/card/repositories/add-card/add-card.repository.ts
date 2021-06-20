import { Card } from '@/infra/database/entities/card/card.entity';
import { EntityRepository, Repository } from 'typeorm';
import { AddCardDto } from '@/modules/card/dtos/add-card/add-card.dto';

@EntityRepository(Card)
export class AddCardRepository extends Repository<Card> {
  async add({
    title,
    description,
    destiny,
    date,
    userId,
  }: AddCardDto): Promise<Card> {
    const newCard = this.create({
      title,
      description,
      destiny,
      date,
      user: userId,
    });
    return await this.save(newCard);
  }
}
