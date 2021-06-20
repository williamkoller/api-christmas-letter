import { IsDate, IsNotEmpty, IsString } from 'class-validator';

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

  @IsDate()
  @IsNotEmpty()
  date: Date;
}
