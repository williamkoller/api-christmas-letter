import { BaseEntity } from '../base-entity/base.entity';
import { Column, Entity, JoinColumn, JoinTable, OneToMany } from 'typeorm';
import { Card } from '../card/card.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User extends BaseEntity {
  @ApiProperty()
  @Column('varchar')
  name: string;

  @ApiProperty()
  @Column('varchar')
  surname: string;

  @ApiProperty()
  @Column('varchar')
  email: string;

  @ApiProperty()
  @Column('varchar')
  password: string;

  @ApiProperty()
  @OneToMany(() => Card, (card) => card.user, { eager: true })
  @JoinTable()
  cards: Card[];

  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }
}
