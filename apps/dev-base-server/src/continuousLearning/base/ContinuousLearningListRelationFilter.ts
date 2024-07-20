/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContinuousLearningWhereInput } from "./ContinuousLearningWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContinuousLearningListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ContinuousLearningWhereInput,
  })
  @ValidateNested()
  @Type(() => ContinuousLearningWhereInput)
  @IsOptional()
  @Field(() => ContinuousLearningWhereInput, {
    nullable: true,
  })
  every?: ContinuousLearningWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContinuousLearningWhereInput,
  })
  @ValidateNested()
  @Type(() => ContinuousLearningWhereInput)
  @IsOptional()
  @Field(() => ContinuousLearningWhereInput, {
    nullable: true,
  })
  some?: ContinuousLearningWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContinuousLearningWhereInput,
  })
  @ValidateNested()
  @Type(() => ContinuousLearningWhereInput)
  @IsOptional()
  @Field(() => ContinuousLearningWhereInput, {
    nullable: true,
  })
  none?: ContinuousLearningWhereInput;
}
export { ContinuousLearningListRelationFilter as ContinuousLearningListRelationFilter };
