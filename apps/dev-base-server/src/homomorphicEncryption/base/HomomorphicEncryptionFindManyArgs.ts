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
import { HomomorphicEncryptionWhereInput } from "./HomomorphicEncryptionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HomomorphicEncryptionOrderByInput } from "./HomomorphicEncryptionOrderByInput";

@ArgsType()
class HomomorphicEncryptionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HomomorphicEncryptionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HomomorphicEncryptionWhereInput, { nullable: true })
  @Type(() => HomomorphicEncryptionWhereInput)
  where?: HomomorphicEncryptionWhereInput;

  @ApiProperty({
    required: false,
    type: [HomomorphicEncryptionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HomomorphicEncryptionOrderByInput], { nullable: true })
  @Type(() => HomomorphicEncryptionOrderByInput)
  orderBy?: Array<HomomorphicEncryptionOrderByInput>;

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

export { HomomorphicEncryptionFindManyArgs as HomomorphicEncryptionFindManyArgs };
