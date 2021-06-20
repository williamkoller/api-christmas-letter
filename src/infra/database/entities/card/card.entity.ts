import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../base-entity/base.entity';

@Entity('cards')
export class Card extends BaseEntity {
  @Column('varchar')
  title: string;

  @Column('varchar')
  description: string;

  @Column('varchar')
  destiny: string;

  @Column('date')
  date: Date;

  constructor(partial: Partial<Card>) {
    super();
    Object.assign(this, partial);
  }
}
