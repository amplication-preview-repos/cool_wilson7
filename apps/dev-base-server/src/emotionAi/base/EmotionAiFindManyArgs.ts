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
import { EmotionAiWhereInput } from "./EmotionAiWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EmotionAiOrderByInput } from "./EmotionAiOrderByInput";

@ArgsType()
class EmotionAiFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EmotionAiWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EmotionAiWhereInput, { nullable: true })
  @Type(() => EmotionAiWhereInput)
  where?: EmotionAiWhereInput;

  @ApiProperty({
    required: false,
    type: [EmotionAiOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EmotionAiOrderByInput], { nullable: true })
  @Type(() => EmotionAiOrderByInput)
  orderBy?: Array<EmotionAiOrderByInput>;

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

export { EmotionAiFindManyArgs as EmotionAiFindManyArgs };
