import { Module } from '@nestjs/common';
import { BlogModule } from './blog/blog.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [BlogModule, PrismaModule],
})
export class AppModule {}
