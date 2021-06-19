import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class LoadEmailDto {
  @ApiProperty()
  @IsEmail()
  email: string;
}
