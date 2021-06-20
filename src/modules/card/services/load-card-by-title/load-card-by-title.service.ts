import { Card } from '@/infra/database/entities/card/card.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { LoadByTitleDto } from '../../dtos/load-by-title/load-by-title.dto';
import { LoadCardByTitleRepository } from '../../repositories/load-card-by-title/load-card-by-title.repository';

@Injectable()
export class LoadCardByTitleService {
  constructor(
    private readonly loadCardBytitleRepository: LoadCardByTitleRepository,
  ) {}

  async loadByTitle({ title }: LoadByTitleDto): Promise<Card[]> {
    const cardTitle = await this.loadCardBytitleRepository.loadByTitle({
      title,
    });

    if (!cardTitle?.length) {
      throw new NotFoundException('Card not found.');
    }

    return cardTitle;
  }
}
