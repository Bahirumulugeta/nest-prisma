import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
// import { BlogService } from './blog/blog.service';
import { BlogModule } from './blog/blog.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [BlogModule],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}