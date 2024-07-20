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
import { ContinuousAuthenticationWhereInput } from "./ContinuousAuthenticationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ContinuousAuthenticationOrderByInput } from "./ContinuousAuthenticationOrderByInput";

@ArgsType()
class ContinuousAuthenticationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ContinuousAuthenticationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ContinuousAuthenticationWhereInput, { nullable: true })
  @Type(() => ContinuousAuthenticationWhereInput)
  where?: ContinuousAuthenticationWhereInput;

  @ApiProperty({
    required: false,
    type: [ContinuousAuthenticationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ContinuousAuthenticationOrderByInput], { nullable: true })
  @Type(() => ContinuousAuthenticationOrderByInput)
  orderBy?: Array<ContinuousAuthenticationOrderByInput>;

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

export { ContinuousAuthenticationFindManyArgs as ContinuousAuthenticationFindManyArgs };
