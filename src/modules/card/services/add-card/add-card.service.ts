import { Card } from '@/infra/database/entities/card/card.entity';
import { ConflictException, Injectable } from '@nestjs/common';
import { AddCardDto } from '@/modules/card/dtos/add-card/add-card.dto';
import { AddCardRepository } from '@/modules/card/repositories/add-card/add-card.repository';
import { LoadCardByTitleRepository } from '@/modules/card/repositories/load-card-by-title/load-card-by-title.repository';

@Injectable()
export class AddCardService {
  constructor(
    private readonly addCardRepository: AddCardRepository,
    private readonly loadCardByTitleRepository: LoadCardByTitleRepository,
  ) {}

  async addCard({
    title,
    description,
    destiny,
    date,
  }: AddCardDto): Promise<Card> {
    const cardExists = await this.loadCardByTitleRepository.loadByTitle({
      title,
    });

    if (cardExists?.length) {
      throw new ConflictException('There is already a card with this title.');
    }

    return await this.addCardRepository.add({
      title,
      description,
      destiny,
      date,
    });
  }
}
