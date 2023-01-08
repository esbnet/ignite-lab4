/* eslint-disable prettier/prettier */
import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';

interface GetRecipientNotificarionRequest {
  recipientId: string;
}

interface GetRecipientNotificationResponse {
  notifications: Notification[]
}

@Injectable()
export class GetRecipientNotification {
  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(
    request: GetRecipientNotificarionRequest,
  ): Promise<GetRecipientNotificationResponse> {
    const { recipientId } = request;

    const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
