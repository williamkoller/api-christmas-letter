import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString } from 'class-validator';

export class UpdateCardDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  id?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  title?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  destiny?: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  date?: Date;
}
