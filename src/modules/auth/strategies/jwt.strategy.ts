import { User } from '@/infra/database/entities/user/user.entity';
import { LoadUserIdToAuthService } from '@/modules/user/services/load-user-auth-by-id/load-user-auth-by-id.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly loadUserIdToAuthService: LoadUserIdToAuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { sub: User['id'] }): Promise<User> {
    const user = await this.loadUserIdToAuthService.loadUserIdToAuth({
      id: payload.sub,
    });
    if (!user) {
      throw new UnauthorizedException('User Unauthorized.');
    }
    return user;
  }
}
