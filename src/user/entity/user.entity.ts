import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from '../../post/entity/post.entity';

@ObjectType()
export class User {
  @Field((returns) => Int)
  userId: number;

  @Field()
  userName: string;

  @Field((returns) => [Post])
  posts: Post[];
}
