import { Field, ObjectType } from '@nestjs/graphql';
import { Brand } from '../../brand/entity/brand.entity';

@ObjectType()
export class Post {
  @Field()
  postName: string;

  @Field({ nullable: true })
  description?: string;
  //
  // @Field((returns) => Brand)
  // brand: Brand;
}
