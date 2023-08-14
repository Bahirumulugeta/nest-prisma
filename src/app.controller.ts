import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BlogService } from './blog/blog.service';
import { Blog } from '@prisma/client';

@Controller('blogs')
export class AppController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  async getAllBlogs(): Promise<Blog[]> {
    return this.blogService.getAllBlogs();
  }
  @Post()
  async createBlog(@Body() data: Blog): Promise<Blog> {
    return this.blogService.createBlog(data);
  }

  @Get(':id')
  async getBlogById(@Param('id') blogId: number): Promise<Blog> {
    return this.blogService.getBlogById(blogId);
  }

  @Put(':id')
  async updateBlog(
    @Param('id') blogId: number,
    @Body() data: Blog,
  ): Promise<Blog> {
    return this.blogService.updateBlog(blogId, data);
  }

  @Delete(':id')
  async deleteBlog(@Param('id') blogId: number): Promise<Blog> {
    return this.blogService.deleteBlog(blogId);
  }
}
