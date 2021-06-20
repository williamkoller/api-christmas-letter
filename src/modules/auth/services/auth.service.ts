import { HashComparer } from '@/infra/cryptography/hash-comparer/hash-comparer';
import { User } from '@/infra/database/entities/user/user.entity';
import { LoadUserByEmailRepository } from '@/modules/user/repositories/load-user-by-email/load-user-by-email.repository';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthUserDto } from '../dtos/auth-user/auth-user.dto';
import { UserTokenInputType } from '../dtos/user-token-input/user-token-input.type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly loadUserByEmailRepository: LoadUserByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser({
    email,
    password,
  }: AuthUserDto): Promise<UserTokenInputType> {
    try {
      const user = await this.loadUserByEmailRepository.loadByEmail({ email });

      if (!user) {
        throw new UnauthorizedException();
      }

      const passwordIsMatch = await this.hashComparer.comparer(
        password,
        user.password,
      );

      if (!passwordIsMatch) {
        throw new UnauthorizedException('Incorrect password or email.');
      }

      delete user.password;

      return {
        user,
        token: await this.generateToken(user),
      };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async generateToken(user: User): Promise<string> {
    const payload = {
      sub: user.id,
      name: user.name,
      surname: user.surname,
    };

    return this.jwtService.signAsync(payload);
  }
}
