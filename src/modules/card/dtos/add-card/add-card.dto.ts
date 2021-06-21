import { User } from '@/infra/database/entities/user/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddCardDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  destiny: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  date: Date;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  userId: User;
}
