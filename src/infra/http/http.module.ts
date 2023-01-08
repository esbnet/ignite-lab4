import { SendNotification } from '@application/use-cases/send-notificarion';
import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { NotificarionsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificarionsController],
  providers: [SendNotification],
})
// eslint-disable-next-line prettier/prettier
export class HttpModule { }
