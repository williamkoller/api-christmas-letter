import { Column, Entity, JoinColumn, JoinTable, ManyToOne } from 'typeorm';
import { BaseEntity } from '../base-entity/base.entity';
import { User } from '../user/user.entity';

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

  @ManyToOne(() => User, (user) => user.cards)
  user: User;

  constructor(partial: Partial<Card>) {
    super();
    Object.assign(this, partial);
  }
}
