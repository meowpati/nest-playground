import { Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './entity/user.entity';
import { Post } from '../post/entity/post.entity';

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User)
  public getUser() {
    return { userId: 3, userName: 'John' };
  }

  @ResolveField('posts', (returns) => [Post])
  public getPosts() {
    console.log('aaa');
    return [
      {
        postName: 'postian',
      },
      {
        postName: 'sure',
      },
    ];
  }
}
