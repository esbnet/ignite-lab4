import { Content } from '@application/entities/content';
import {
  Notification,
  // eslint-disable-next-line prettier/prettier
  NotificationAttributes
} from '@application/entities/notification';

type Override = Partial<NotificationAttributes>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Você tem uma nova notificação'),
    recipientId: 'recipient-id',
    ...override,
  });
}
