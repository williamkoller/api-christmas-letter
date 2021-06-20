import { Card } from '@/infra/database/entities/card/card.entity';
import { LoadByIdDto } from '@/utils/dtos/load-by-id/load-by-id.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { LoadCardByIdRepository } from '../../repositories/load-card-by-id/load-card-by-id.repository';

@Injectable()
export class LoadCardByIdService {
  constructor(
    private readonly loadCardByIdRepository: LoadCardByIdRepository,
  ) {}
  async loadById({ id }: LoadByIdDto): Promise<Card> {
    const card = await this.loadCardByIdRepository.loadById({ id });

    if (!card) {
      throw new NotFoundException('Card not found.');
    }

    return card;
  }
}
