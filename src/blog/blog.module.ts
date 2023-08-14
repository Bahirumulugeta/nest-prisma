import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  providers: [BlogService, PrismaService],
  exports: [BlogService],
})
export class BlogModule {}
