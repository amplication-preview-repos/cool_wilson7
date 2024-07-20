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
import { DecentralizedIdentityWhereInput } from "./DecentralizedIdentityWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DecentralizedIdentityOrderByInput } from "./DecentralizedIdentityOrderByInput";

@ArgsType()
class DecentralizedIdentityFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DecentralizedIdentityWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DecentralizedIdentityWhereInput, { nullable: true })
  @Type(() => DecentralizedIdentityWhereInput)
  where?: DecentralizedIdentityWhereInput;

  @ApiProperty({
    required: false,
    type: [DecentralizedIdentityOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DecentralizedIdentityOrderByInput], { nullable: true })
  @Type(() => DecentralizedIdentityOrderByInput)
  orderBy?: Array<DecentralizedIdentityOrderByInput>;

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

export { DecentralizedIdentityFindManyArgs as DecentralizedIdentityFindManyArgs };
