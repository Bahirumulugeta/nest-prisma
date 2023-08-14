import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.model';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll(): Blog[] {
    return this.blogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Blog {
    return this.blogService.findOne(+id);
  }

  @Post()
  create(@Body() blog: Blog): Blog {
    return this.blogService.create(blog);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() blog: Blog): Blog {
    return this.blogService.update(+id, blog);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this.blogService.remove(+id);
  }
}
