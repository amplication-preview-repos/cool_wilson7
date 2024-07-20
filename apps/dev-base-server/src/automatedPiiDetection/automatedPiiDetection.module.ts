import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AutomatedPiiDetectionModuleBase } from "./base/automatedPiiDetection.module.base";
import { AutomatedPiiDetectionService } from "./automatedPiiDetection.service";
import { AutomatedPiiDetectionController } from "./automatedPiiDetection.controller";
import { AutomatedPiiDetectionResolver } from "./automatedPiiDetection.resolver";

@Module({
  imports: [AutomatedPiiDetectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [AutomatedPiiDetectionController],
  providers: [AutomatedPiiDetectionService, AutomatedPiiDetectionResolver],
  exports: [AutomatedPiiDetectionService],
})
export class AutomatedPiiDetectionModule {}
