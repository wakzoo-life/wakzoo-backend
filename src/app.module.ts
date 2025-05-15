import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { CacheModule } from '@nestjs/cache-manager'

import KeyvRedis from '@keyv/redis'

import { AppController } from './app.controller'
import { CafeModule } from './cafe/cafe.module'
import { UserModule } from './user/user.module'
import { QnaModule } from './qna/qna.module'
import { HomeModule } from './home/home.module'
import { FaqModule } from './faq/faq.module'
import { CreditModule } from './credit/credit.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development', '.env'],
    }),
    process.env.ENABLE_REDIS === '1'
      ? CacheModule.registerAsync({
          useFactory: async (configService: ConfigService) => ({
            stores: [new KeyvRedis(configService.getOrThrow('REDIS_URI'))],
          }),
          inject: [ConfigService],
          isGlobal: true,
        })
      : CacheModule.register({
          isGlobal: true,
        }),
    AppModule,
    CafeModule,
    CreditModule,
    FaqModule,
    HomeModule,
    QnaModule,
    UserModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
