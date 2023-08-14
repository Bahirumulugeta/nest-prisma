// Controller file for blogs
// Import necessary things from nest js classes
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
// Blog service
import { BlogService } from './blog.service';

// Blog model
import { Blog, Prisma } from '@prisma/client';

// Controller decorator with blogs route(endpoint)
// Is applied to BlogController class
@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  /*
    This decorator applies to findAll methods
    FindAll method returns array of blog object
  */
  @Get()
  async getAllBlogs(): Promise<Blog[]> {
    return this.blogService.getAllBlogs();
  }

  // FindOne method has an id param and returns single blog
  @Get(':id')
  async getBlogById(@Param('id') blogId: number): Promise<Blog> {
    return this.blogService.getBlogById(blogId);
  }

  // Create method has post decorator - accepts blog information as json and return blog object
  @Post()
  async createBlog(@Body() data: Prisma.BlogCreateInput): Promise<Blog> {
    return this.blogService.createBlog(data);
  }

  /* 
    Update method has Put decorator
    We can use patch instead of put for optimazation
    Has id params and accepts updated info about the blog
    Returns updatd blog information as object
   */
  @Put(':id')
  async updateBlog(
    @Param('id') blogId: number,
    @Body() data: Prisma.BlogUpdateInput,
  ): Promise<Blog> {
    return this.blogService.updateBlog(blogId, data);
  }
  // Remove method has Delete decorator and returns boolean(true or false)
  @Delete(':id')
  async deleteBlog(@Param('id') blogId: number): Promise<Blog> {
    return this.blogService.deleteBlog(blogId);
  }
}
