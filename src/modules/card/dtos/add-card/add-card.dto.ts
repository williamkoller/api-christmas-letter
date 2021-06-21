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

  @ApiProperty({ example: '06/21/2021' })
  @IsString()
  @IsNotEmpty()
  date: Date;

  @ApiProperty({ example: 'e6b09b95-312f-45e5-9cdd-a1d0e1a7e701' })
  @IsString()
  @IsNotEmpty()
  userId: User;
}
