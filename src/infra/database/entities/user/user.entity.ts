import { BaseEntity } from '../base-entity/base.entity';
import { Column, Entity, JoinTable, OneToMany } from 'typeorm';
import { Card } from '../card/card.entity';

@Entity('users')
export class User extends BaseEntity {
  @Column('varchar')
  name: string;

  @Column('varchar')
  surname: string;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @Column({ type: 'simple-array', array: true })
  @OneToMany(() => Card, (card) => card.user, { eager: true })
  @JoinTable()
  cards: Card[];

  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }
}
