import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PredictiveScalingModuleBase } from "./base/predictiveScaling.module.base";
import { PredictiveScalingService } from "./predictiveScaling.service";
import { PredictiveScalingController } from "./predictiveScaling.controller";
import { PredictiveScalingResolver } from "./predictiveScaling.resolver";

@Module({
  imports: [PredictiveScalingModuleBase, forwardRef(() => AuthModule)],
  controllers: [PredictiveScalingController],
  providers: [PredictiveScalingService, PredictiveScalingResolver],
  exports: [PredictiveScalingService],
})
export class PredictiveScalingModule {}
