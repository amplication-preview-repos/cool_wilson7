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
import { IntegratedKnowledgeBaseWhereInput } from "./IntegratedKnowledgeBaseWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IntegratedKnowledgeBaseListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IntegratedKnowledgeBaseWhereInput,
  })
  @ValidateNested()
  @Type(() => IntegratedKnowledgeBaseWhereInput)
  @IsOptional()
  @Field(() => IntegratedKnowledgeBaseWhereInput, {
    nullable: true,
  })
  every?: IntegratedKnowledgeBaseWhereInput;

  @ApiProperty({
    required: false,
    type: () => IntegratedKnowledgeBaseWhereInput,
  })
  @ValidateNested()
  @Type(() => IntegratedKnowledgeBaseWhereInput)
  @IsOptional()
  @Field(() => IntegratedKnowledgeBaseWhereInput, {
    nullable: true,
  })
  some?: IntegratedKnowledgeBaseWhereInput;

  @ApiProperty({
    required: false,
    type: () => IntegratedKnowledgeBaseWhereInput,
  })
  @ValidateNested()
  @Type(() => IntegratedKnowledgeBaseWhereInput)
  @IsOptional()
  @Field(() => IntegratedKnowledgeBaseWhereInput, {
    nullable: true,
  })
  none?: IntegratedKnowledgeBaseWhereInput;
}
export { IntegratedKnowledgeBaseListRelationFilter as IntegratedKnowledgeBaseListRelationFilter };
