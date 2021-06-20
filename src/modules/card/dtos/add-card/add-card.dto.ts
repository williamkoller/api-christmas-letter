import { User } from '@/infra/database/entities/user/user.entity';
import { IsNotEmpty, IsString } from 'class-validator';

export class AddCardDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  destiny: string;

  @IsString()
  @IsNotEmpty()
  date: Date;

  @IsString()
  @IsNotEmpty()
  userId: User;
}
