import { Card } from '@/infra/database/entities/card/card.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddCardRepository } from '@/modules/card/repositories/add-card/add-card.repository';
import { LoadCardByIdRepository } from '@/modules/card/repositories/load-card-by-id/load-card-by-id.repository';
import { LoadAllCarsRepository } from '@/modules/card/repositories/load-all-cards/load-all-cards.repository';
import { UpdateCardRepository } from '@/modules/card/repositories/update-card/update-card.repository';
import { DeleteCardRepository } from '@/modules/card/repositories/delete-card/delete-card.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Card,
      AddCardRepository,
      DeleteCardRepository,
      LoadCardByIdRepository,
      LoadAllCarsRepository,
      UpdateCardRepository,
    ]),
  ],
})
export class CardModule {}
