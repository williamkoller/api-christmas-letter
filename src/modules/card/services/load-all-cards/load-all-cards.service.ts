import { Card } from '@/infra/database/entities/card/card.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { LoadAllCarsRepository } from '../../repositories/load-all-cards/load-all-cards.repository';

@Injectable()
export class LoadAllCardsService {
  constructor(private readonly loadAllCardsRepository: LoadAllCarsRepository) {}
  async loadAll(): Promise<Card[]> {
    const cards = await this.loadAllCardsRepository.loadAll();

    if (!cards.length) {
      throw new NotFoundException('No record found.');
    }

    return cards;
  }
}
