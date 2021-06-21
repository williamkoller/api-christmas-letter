import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoadByTitleDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;
}
