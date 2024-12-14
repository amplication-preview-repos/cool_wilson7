import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DataRetentionPoliciesModuleBase } from "./base/dataRetentionPolicies.module.base";
import { DataRetentionPoliciesService } from "./dataRetentionPolicies.service";
import { DataRetentionPoliciesController } from "./dataRetentionPolicies.controller";
import { DataRetentionPoliciesResolver } from "./dataRetentionPolicies.resolver";

@Module({
  imports: [DataRetentionPoliciesModuleBase, forwardRef(() => AuthModule)],
  controllers: [DataRetentionPoliciesController],
  providers: [DataRetentionPoliciesService, DataRetentionPoliciesResolver],
  exports: [DataRetentionPoliciesService],
})
export class DataRetentionPoliciesModule {}
