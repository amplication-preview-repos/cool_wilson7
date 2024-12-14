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
import { DatabaseQueryOptimizationWhereInput } from "./DatabaseQueryOptimizationWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { DatabaseQueryOptimizationOrderByInput } from "./DatabaseQueryOptimizationOrderByInput";

@ArgsType()
class DatabaseQueryOptimizationFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => DatabaseQueryOptimizationWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => DatabaseQueryOptimizationWhereInput, { nullable: true })
  @Type(() => DatabaseQueryOptimizationWhereInput)
  where?: DatabaseQueryOptimizationWhereInput;

  @ApiProperty({
    required: false,
    type: [DatabaseQueryOptimizationOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [DatabaseQueryOptimizationOrderByInput], { nullable: true })
  @Type(() => DatabaseQueryOptimizationOrderByInput)
  orderBy?: Array<DatabaseQueryOptimizationOrderByInput>;

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

export { DatabaseQueryOptimizationFindManyArgs as DatabaseQueryOptimizationFindManyArgs };
