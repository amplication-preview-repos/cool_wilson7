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
import { AutomatedFeatureEngineeringWhereInput } from "./AutomatedFeatureEngineeringWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AutomatedFeatureEngineeringCountArgs {
  @ApiProperty({
    required: false,
    type: () => AutomatedFeatureEngineeringWhereInput,
  })
  @Field(() => AutomatedFeatureEngineeringWhereInput, { nullable: true })
  @Type(() => AutomatedFeatureEngineeringWhereInput)
  where?: AutomatedFeatureEngineeringWhereInput;
}

export { AutomatedFeatureEngineeringCountArgs as AutomatedFeatureEngineeringCountArgs };
