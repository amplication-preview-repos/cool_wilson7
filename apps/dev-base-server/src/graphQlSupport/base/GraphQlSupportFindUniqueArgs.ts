/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GraphQlSupportWhereUniqueInput } from "./GraphQlSupportWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class GraphQlSupportFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => GraphQlSupportWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GraphQlSupportWhereUniqueInput)
  @Field(() => GraphQlSupportWhereUniqueInput, { nullable: false })
  where!: GraphQlSupportWhereUniqueInput;
}

export { GraphQlSupportFindUniqueArgs as GraphQlSupportFindUniqueArgs };
