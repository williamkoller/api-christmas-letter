import { Card } from '@/infra/database/entities/card/card.entity';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddCardDto } from '@/modules/card/dtos/add-card/add-card.dto';
import { AddCardService } from '@/modules/card/services/add-card/add-card.service';
import { DeleteCardService } from '@/modules/card/services/delete-card/delete-card.service';
import { ValidationParamsPipe } from '@/common/pipes/validation-params.pipe';
import { Message } from '@/utils/types/message/message.type';
import { LoadCardByIdService } from '@/modules/card/services/load-card-by-id/load-card-by-id.service';
import { LoadAllCardsService } from '@/modules/card/services/load-all-cards/load-all-cards.service';

@ApiTags('card')
@Controller('card')
@ApiBearerAuth()
export class CardsController {
  constructor(
    private readonly AddCardService: AddCardService,
    private readonly deleteCardService: DeleteCardService,
    private readonly loadCardByIdService: LoadCardByIdService,
    private readonly loadAllCardsService: LoadAllCardsService,
  ) {}

  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'There is already a card with this title.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Add new card.',
  })
  @UseGuards(JwtAuthGuard)
  @Post('/add-card')
  async add(
    @Body() { title, description, destiny, date, userId }: AddCardDto,
  ): Promise<Card> {
    return await this.AddCardService.addCard({
      title,
      description,
      destiny,
      date,
      userId,
    });
  }

  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Card not found.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Card deleted with successfully.',
  })
  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id')
  async delete(
    @Param('id', ValidationParamsPipe, ParseUUIDPipe) id: string,
  ): Promise<Message> {
    return await this.deleteCardService.deleteCard({ id });
  }

  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Card not found.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Load card by id.',
  })
  @UseGuards(JwtAuthGuard)
  @Put('/load-by-id/:id')
  async loadById(
    @Param('id', ValidationParamsPipe, ParseUUIDPipe) id: string,
  ): Promise<Card> {
    return await this.loadCardByIdService.loadById({ id });
  }

  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'No record found.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Load all card.',
  })
  @UseGuards(JwtAuthGuard)
  @Get('/load-all')
  async loadAll(): Promise<Card[]> {
    return await this.loadAllCardsService.loadAll();
  }
}
