import { HashComparer } from '@/infra/cryptography/hash-comparer/hash-comparer';
import { Hasher } from '@/infra/cryptography/hasher/hasher';
import { UpdateUserRepository } from '@/modules/user/repositories/update-user/update-user.repository';
import { Message } from '@/utils/types/message/message.type';
import { UpdateUserDto } from '@/modules/user/dtos/update-user/update-user.dto';
import { LoadUserByIdService } from '@/modules/user/services/load-user-by-id/load-user-by-id.service';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UpdateUserService {
  constructor(
    private readonly updateUserRepository: UpdateUserRepository,
    private readonly hasher: Hasher,
    private readonly hasherComparer: HashComparer,
    private readonly loadUserByIdService: LoadUserByIdService,
  ) {}

  async updateUser({
    id,
    name,
    surname,
    email,
  }: UpdateUserDto): Promise<Message> {
    try {
      const { id: userId } = await this.loadUserByIdService.loadById({ id });

      await this.updateUserRepository.updateUser({
        id: userId,
        name,
        surname,
        email,
      });

      return {
        message: 'User updated with successfully.',
      };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async updatePassword({ id, password }: UpdateUserDto): Promise<Message> {
    try {
      const { id: userId, password: oldPassword } =
        await this.loadUserByIdService.loadById({ id });

      const hasherPassword = await this.hasher.hash(password);

      const comparerPassword = await this.hasherComparer.comparer(
        password,
        oldPassword,
      );

      if (comparerPassword) {
        throw new BadRequestException(
          'The password cannot be identical to the previous one.',
        );
      }

      await this.updateUserRepository.update(userId, {
        password: hasherPassword,
      });

      return {
        message: 'Password updated with successfully.',
      };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
