/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { Module } from "@nestjs/common";
import { ACLModule } from "../../auth/acl.module";
@Module({
  imports: [ACLModule],
  exports: [ACLModule],
})
export class AutomatedFeatureEngineeringModuleBase {}
