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
import { GraphQlSupportWhereInput } from "./GraphQlSupportWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GraphQlSupportOrderByInput } from "./GraphQlSupportOrderByInput";

@ArgsType()
class GraphQlSupportFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GraphQlSupportWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GraphQlSupportWhereInput, { nullable: true })
  @Type(() => GraphQlSupportWhereInput)
  where?: GraphQlSupportWhereInput;

  @ApiProperty({
    required: false,
    type: [GraphQlSupportOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GraphQlSupportOrderByInput], { nullable: true })
  @Type(() => GraphQlSupportOrderByInput)
  orderBy?: Array<GraphQlSupportOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { GraphQlSupportFindManyArgs as GraphQlSupportFindManyArgs };
