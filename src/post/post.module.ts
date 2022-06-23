import { PostResolver } from './post.resolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [PostResolver],
})
export class PostModule {}
