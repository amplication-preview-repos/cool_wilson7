import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AutomatedThreatDetectionModuleBase } from "./base/automatedThreatDetection.module.base";
import { AutomatedThreatDetectionService } from "./automatedThreatDetection.service";
import { AutomatedThreatDetectionController } from "./automatedThreatDetection.controller";
import { AutomatedThreatDetectionResolver } from "./automatedThreatDetection.resolver";

@Module({
  imports: [AutomatedThreatDetectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [AutomatedThreatDetectionController],
  providers: [
    AutomatedThreatDetectionService,
    AutomatedThreatDetectionResolver,
  ],
  exports: [AutomatedThreatDetectionService],
})
export class AutomatedThreatDetectionModule {}
