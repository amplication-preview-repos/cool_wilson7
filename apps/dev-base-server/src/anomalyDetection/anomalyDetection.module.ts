import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnomalyDetectionModuleBase } from "./base/anomalyDetection.module.base";
import { AnomalyDetectionService } from "./anomalyDetection.service";
import { AnomalyDetectionController } from "./anomalyDetection.controller";
import { AnomalyDetectionResolver } from "./anomalyDetection.resolver";

@Module({
  imports: [AnomalyDetectionModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnomalyDetectionController],
  providers: [AnomalyDetectionService, AnomalyDetectionResolver],
  exports: [AnomalyDetectionService],
})
export class AnomalyDetectionModule {}
