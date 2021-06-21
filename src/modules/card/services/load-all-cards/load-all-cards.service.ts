import { Card } from '@/infra/database/entities/card/card.entity';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LoadAllCarsRepository } from '../../repositories/load-all-cards/load-all-cards.repository';

@Injectable()
export class LoadAllCardsService {
  constructor(private readonly loadAllCardsRepository: LoadAllCarsRepository) {}
  async loadAll(): Promise<Card[]> {
    try {
      const cards = await this.loadAllCardsRepository.loadAll();

      if (!cards.length) {
        throw new NotFoundException('No record found.');
      }

      return cards;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
