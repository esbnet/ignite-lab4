interface NotificationAttributes {
  recipientId: string;
  content: string;
  category: string;
  readAt?: Date | null;
  createAt: Date;
}

export class Notification {
  private props: NotificationAttributes;

  constructor(props: NotificationAttributes) {
    this.props = props;
  }

  public get content(): string {
    return this.props.content;
  }

  public set content(content: string) {
    this.props.content = content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.content = category;
  }
}
