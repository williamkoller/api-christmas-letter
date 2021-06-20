import { LoadByIdDto } from '@/utils/dtos/load-by-id/load-by-id.dto';
import { Message } from '@/utils/types/message/message.type';
import { Injectable } from '@nestjs/common';
import { DeleteCardRepository } from '../../repositories/delete-card/delete-card.repository';
import { LoadCardByIdService } from '../load-card-by-id/load-card-by-id.service';

@Injectable()
export class DeleteCardService {
  constructor(
    private readonly deleteCardRepository: DeleteCardRepository,
    private readonly loadCardByIdService: LoadCardByIdService,
  ) {}
  async deleteCard({ id }: LoadByIdDto): Promise<Message> {
    const { id: cardId } = await this.loadCardByIdService.loadById({ id });

    await this.deleteCardRepository.deleteCard({ id: cardId });

    return {
      message: 'Card deleted with successfully.',
    };
  }
}
