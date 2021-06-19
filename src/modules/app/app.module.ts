import { configService } from '@/infra/database/config/config.service';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '@/modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()[0]),
    forwardRef(() => UserModule),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
