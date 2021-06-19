import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class LoadByIdDto {
  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
