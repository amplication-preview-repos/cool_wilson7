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
import { ArAppPrototypingWhereInput } from "./ArAppPrototypingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ArAppPrototypingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ArAppPrototypingWhereInput,
  })
  @ValidateNested()
  @Type(() => ArAppPrototypingWhereInput)
  @IsOptional()
  @Field(() => ArAppPrototypingWhereInput, {
    nullable: true,
  })
  every?: ArAppPrototypingWhereInput;

  @ApiProperty({
    required: false,
    type: () => ArAppPrototypingWhereInput,
  })
  @ValidateNested()
  @Type(() => ArAppPrototypingWhereInput)
  @IsOptional()
  @Field(() => ArAppPrototypingWhereInput, {
    nullable: true,
  })
  some?: ArAppPrototypingWhereInput;

  @ApiProperty({
    required: false,
    type: () => ArAppPrototypingWhereInput,
  })
  @ValidateNested()
  @Type(() => ArAppPrototypingWhereInput)
  @IsOptional()
  @Field(() => ArAppPrototypingWhereInput, {
    nullable: true,
  })
  none?: ArAppPrototypingWhereInput;
}
export { ArAppPrototypingListRelationFilter as ArAppPrototypingListRelationFilter };
