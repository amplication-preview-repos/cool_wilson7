import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AutomatedComplianceChecksModuleBase } from "./base/automatedComplianceChecks.module.base";
import { AutomatedComplianceChecksService } from "./automatedComplianceChecks.service";
import { AutomatedComplianceChecksController } from "./automatedComplianceChecks.controller";
import { AutomatedComplianceChecksResolver } from "./automatedComplianceChecks.resolver";

@Module({
  imports: [AutomatedComplianceChecksModuleBase, forwardRef(() => AuthModule)],
  controllers: [AutomatedComplianceChecksController],
  providers: [
    AutomatedComplianceChecksService,
    AutomatedComplianceChecksResolver,
  ],
  exports: [AutomatedComplianceChecksService],
})
export class AutomatedComplianceChecksModule {}
