import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Blog, Prisma } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async createBlog(data: Prisma.BlogCreateInput): Promise<Blog> {
    return this.prisma.blog.create({ data });
  }

  async getAllBlogs(): Promise<Blog[]> {
    return this.prisma.blog.findMany();
  }

  async getBlogById(blogId: number): Promise<Blog | null> {
    return this.prisma.blog.findUnique({ where: { id: Number(blogId) } });
  }

  async updateBlog(
    blogId: number,
    data: Prisma.BlogUpdateInput,
  ): Promise<Blog> {
    return this.prisma.blog.update({ where: { id: Number(blogId) }, data });
  }

  async deleteBlog(blogId: number): Promise<Blog> {
    return this.prisma.blog.delete({ where: { id: Number(blogId) } });
  }
}
