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
import { FederatedLearningWhereInput } from "./FederatedLearningWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FederatedLearningOrderByInput } from "./FederatedLearningOrderByInput";

@ArgsType()
class FederatedLearningFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FederatedLearningWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FederatedLearningWhereInput, { nullable: true })
  @Type(() => FederatedLearningWhereInput)
  where?: FederatedLearningWhereInput;

  @ApiProperty({
    required: false,
    type: [FederatedLearningOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FederatedLearningOrderByInput], { nullable: true })
  @Type(() => FederatedLearningOrderByInput)
  orderBy?: Array<FederatedLearningOrderByInput>;

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

export { FederatedLearningFindManyArgs as FederatedLearningFindManyArgs };
