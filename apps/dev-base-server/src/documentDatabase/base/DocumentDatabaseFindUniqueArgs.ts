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
import { DocumentDatabaseWhereUniqueInput } from "./DocumentDatabaseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DocumentDatabaseFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => DocumentDatabaseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocumentDatabaseWhereUniqueInput)
  @Field(() => DocumentDatabaseWhereUniqueInput, { nullable: false })
  where!: DocumentDatabaseWhereUniqueInput;
}

export { DocumentDatabaseFindUniqueArgs as DocumentDatabaseFindUniqueArgs };
