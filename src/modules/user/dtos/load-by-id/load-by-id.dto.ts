import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoadByIdDto {
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
