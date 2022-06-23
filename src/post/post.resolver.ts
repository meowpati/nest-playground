import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from './entity/post.entity';

@Resolver((of) => Post)
export class PostResolver {
  @ResolveField('description', (returns) => String)
  public getDescription(@Parent() parent) {
    console.log('bbb');
    // @ts-ignore
    if (new Date() % 2 === 0) {
      return 'hello';
    } else {
      return 'hi';
    }
  }
}
