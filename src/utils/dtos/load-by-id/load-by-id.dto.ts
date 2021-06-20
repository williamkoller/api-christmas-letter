import { IsNotEmpty, IsString } from 'class-validator';

export class LoadByIdDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}
