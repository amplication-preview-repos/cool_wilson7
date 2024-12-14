import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccessibilityComplianceModuleBase } from "./base/accessibilityCompliance.module.base";
import { AccessibilityComplianceService } from "./accessibilityCompliance.service";
import { AccessibilityComplianceController } from "./accessibilityCompliance.controller";
import { AccessibilityComplianceResolver } from "./accessibilityCompliance.resolver";

@Module({
  imports: [AccessibilityComplianceModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccessibilityComplianceController],
  providers: [AccessibilityComplianceService, AccessibilityComplianceResolver],
  exports: [AccessibilityComplianceService],
})
export class AccessibilityComplianceModule {}
