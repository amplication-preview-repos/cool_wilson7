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
import { Type } from "class-transformer";

@ArgsType()
class HomomorphicEncryptionCountArgs {
  @ApiProperty({
    required: false,
    type: () => HomomorphicEncryptionWhereInput,
  })
  @Field(() => HomomorphicEncryptionWhereInput, { nullable: true })
  @Type(() => HomomorphicEncryptionWhereInput)
  where?: HomomorphicEncryptionWhereInput;
}

export { HomomorphicEncryptionCountArgs as HomomorphicEncryptionCountArgs };
