import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationAttributes {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  cancelAt?: Date | null;
  createAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationAttributes;

  constructor(props: Replace<NotificationAttributes, { createAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createAt: props.createAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public unread() {
    return (this.props.readAt = null);
  }

  public read() {
    this.props.readAt = new Date();
  }

  public get cancelAt(): Date | null | undefined {
    return this.props.cancelAt;
  }

  public cancel() {
    this.props.cancelAt = new Date();
  }

  public get createAt(): Date {
    return this.props.createAt;
  }
}
