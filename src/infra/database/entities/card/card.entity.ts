import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base-entity/base.entity';
import { User } from '../user/user.entity';

@Entity('cards')
export class Card extends BaseEntity {
  @ApiProperty()
  @Column('varchar')
  title: string;

  @ApiProperty()
  @Column('varchar')
  description: string;

  @ApiProperty()
  @Column('varchar')
  destiny: string;

  @ApiProperty()
  @Column('date')
  date: Date;

  @ApiProperty()
  @ManyToOne(() => User, (user) => user.cards)
  user: User;

  constructor(partial: Partial<Card>) {
    super();
    Object.assign(this, partial);
  }
}
