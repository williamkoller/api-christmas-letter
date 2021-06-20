import { configService } from '@/infra/database/config/config.service';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@/modules/user/user.module';
import { CoreModule } from '@/modules/core/core.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { CardModule } from '@/modules/card/card.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()[0]),
    forwardRef(() => UserModule),
    forwardRef(() => CoreModule),
    forwardRef(() => AuthModule),
    forwardRef(() => CardModule),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
