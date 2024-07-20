import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CrossPlatformTestingAutomationModuleBase } from "./base/crossPlatformTestingAutomation.module.base";
import { CrossPlatformTestingAutomationService } from "./crossPlatformTestingAutomation.service";
import { CrossPlatformTestingAutomationController } from "./crossPlatformTestingAutomation.controller";
import { CrossPlatformTestingAutomationResolver } from "./crossPlatformTestingAutomation.resolver";

@Module({
  imports: [
    CrossPlatformTestingAutomationModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [CrossPlatformTestingAutomationController],
  providers: [
    CrossPlatformTestingAutomationService,
    CrossPlatformTestingAutomationResolver,
  ],
  exports: [CrossPlatformTestingAutomationService],
})
export class CrossPlatformTestingAutomationModule {}
