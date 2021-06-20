import { Hasher } from '@/infra/cryptography/hasher/hasher';
import { User } from '@/infra/database/entities/user/user.entity';
import { AddUserDto } from '@/modules/user/dtos/add-user/add-user.dto';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AddUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly addUserRepository: Repository<User>,
    private readonly hasher: Hasher,
  ) {}
  async add({ name, surname, email, password }: AddUserDto): Promise<User> {
    const newUser = this.addUserRepository.create({
      name,
      surname,
      email,
      password: await this.hasher.hash(password),
    });

    return await this.addUserRepository.save(newUser);
  }
}
