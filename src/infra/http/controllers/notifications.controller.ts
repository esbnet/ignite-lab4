import { SendNotification } from '@application/use-cases/send-notificarion';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBodyDTO } from '../dto/create-notification-body';
import { NotificationViewModel } from '../view-models/notificarion-view-model';

@Controller('notifications')
export class NotificarionsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private sendNotification: SendNotification) { }

  @Post()
  async create(@Body() body: CreateNotificationBodyDTO) {
    const { recipientId, content, category } = body;

    // eslint-disable-next-line prettier/prettier
    const { notification } = await this.sendNotification.execute({
      recipientId,
      content,
      category,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}
