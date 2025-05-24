import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'

import { AppController } from './app.controller'
import { CafeModule } from './cafe/cafe.module'
import { UserModule } from './user/user.module'
import { QnaModule } from './qna/qna.module'
import { HomeModule } from './home/home.module'
import { FaqModule } from './faq/faq.module'
import { CreditModule } from './credit/credit.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),

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
