import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { AppController } from './app.controller'
import { CafeModule } from './cafe/cafe.module'
import { UserModule } from './user/user.module'
import { QnaModule } from './qna/qna.module'
import { HomeModule } from './home/home.module'
import { FaqModule } from './faq/faq.module'
import { CreditModule } from './credit/credit.module'
import { MongodbModule } from './database/mongoose/mongodb.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongodbModule,
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
