import { Injectable } from '@nestjs/common';
import { Blog } from './blog.model';

@Injectable()
export class BlogService {
  private blogs: Blog[] = [
    {
      id: 12,
      title: 'Hey there',
      description: 'it is simple description',
      img: 'some url',
    },
  ];

  findAll(): Blog[] {
    return this.blogs;
  }

  create(blog: Blog): Blog {
    const newBlog: Blog = { ...blog, id: Date.now() };
    this.blogs.push(newBlog);
    return newBlog;
  }

  findOne(id: number): Blog {
    return this.blogs.find((blog) => blog.id === id);
  }

  update(id: number, blog: Blog): Blog {
    const index = this.blogs.findIndex((blog) => blog.id === id);
    if (index !== -1) {
      this.blogs[index] = { ...blog, id };
      return this.blogs[index];
    }
    return null;
  }

  remove(id: number): boolean {
    const index = this.blogs.findIndex((blog) => blog.id === id);
    if (index !== -1) {
      this.blogs.splice(index, 1);
      return true;
    }
    return false;
  }
}
