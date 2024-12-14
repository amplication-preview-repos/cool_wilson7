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
import { IoTDeviceManagementWhereInput } from "./IoTDeviceManagementWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IoTDeviceManagementListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IoTDeviceManagementWhereInput,
  })
  @ValidateNested()
  @Type(() => IoTDeviceManagementWhereInput)
  @IsOptional()
  @Field(() => IoTDeviceManagementWhereInput, {
    nullable: true,
  })
  every?: IoTDeviceManagementWhereInput;

  @ApiProperty({
    required: false,
    type: () => IoTDeviceManagementWhereInput,
  })
  @ValidateNested()
  @Type(() => IoTDeviceManagementWhereInput)
  @IsOptional()
  @Field(() => IoTDeviceManagementWhereInput, {
    nullable: true,
  })
  some?: IoTDeviceManagementWhereInput;

  @ApiProperty({
    required: false,
    type: () => IoTDeviceManagementWhereInput,
  })
  @ValidateNested()
  @Type(() => IoTDeviceManagementWhereInput)
  @IsOptional()
  @Field(() => IoTDeviceManagementWhereInput, {
    nullable: true,
  })
  none?: IoTDeviceManagementWhereInput;
}
export { IoTDeviceManagementListRelationFilter as IoTDeviceManagementListRelationFilter };
