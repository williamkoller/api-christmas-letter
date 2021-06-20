import { Card } from '@/infra/database/entities/card/card.entity';
import { JwtAuthGuard } from '@/modules/auth/guards/jwt-auth.guard';
import { Body, Controller, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddCardDto } from '../dtos/add-card/add-card.dto';
import { AddCardService } from '../services/add-card/add-card.service';

@ApiTags('card')
@Controller('card')
@ApiBearerAuth()
export class CardsController {
  constructor(private readonly AddCardService: AddCardService) {}

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
}
