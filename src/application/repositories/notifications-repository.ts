import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notificarion: Notification): Promise<void>;
  abstract findById(notificarionId: string): Promise<Notification | null>;
  abstract save(notificarion: Notification): Promise<void>;
  abstract countManyByRecipientId(recipientId: string): Promise<number>;
  abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}
