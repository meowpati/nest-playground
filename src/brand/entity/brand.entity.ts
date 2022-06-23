import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Brand {
  @Field()
  brandName: string;

  @Field((returns) => Int)
  brandId: number;
}
