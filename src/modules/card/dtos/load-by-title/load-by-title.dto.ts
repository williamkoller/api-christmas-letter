import { IsNotEmpty, IsString } from 'class-validator';

export class LoadByTitleDto {
  @IsString()
  @IsNotEmpty()
  title: string;
}
