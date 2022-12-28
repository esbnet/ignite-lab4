import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {
    //temp
  }

  @Get('notifications')
  list() {
    return this.prisma.notification.findMany();
  }

  @Post('notifications')
  async create(@Body() body: CreateNotificationBody) {
    const { content, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId: randomUUID(),
      },
    });
  }
}
