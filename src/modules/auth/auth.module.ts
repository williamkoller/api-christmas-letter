import { HashComparer } from '@/infra/cryptography/hash-comparer/hash-comparer';
import { User } from '@/infra/database/entities/user/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoadUserByEmailRepository } from '@/modules/user/repositories/load-user-by-email/load-user-by-email.repository';
import { AuthController } from '@/modules/auth/controllers/auth.controller';
import { AuthService } from '@/modules/auth/services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '@/modules/auth/strategies/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { LoadUserIdToAuthService } from '@/modules/user/services/load-user-auth-by-id/load-user-auth-by-id.service';
import { LoadUserByIdRepository } from '@/modules/user/repositories/load-user-by-id/load-user-by-id.repository';
import { LoadUserProfileService } from '@/modules/user/services/load-user-profile/load-user-profile.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([
      User,
      LoadUserByEmailRepository,
      LoadUserByIdRepository,
    ]),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: String(process.env.JWT_EXPIRES_IN),
        },
      }),
    }),
  ],
  providers: [
    AuthService,
    HashComparer,
    JwtStrategy,
    LoadUserIdToAuthService,
    LoadUserProfileService,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
