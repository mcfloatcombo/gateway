import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  private posts: Post[] = [];
  create(createPostInput: CreatePostInput) {
    this.posts.push(createPostInput);
    return createPostInput;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: string) {
    return this.posts.find( post => post.id === id );
  }

  // update(id: number, updatePostInput: UpdatePostInput) {
  //   return `This action updates a #${id} post`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
