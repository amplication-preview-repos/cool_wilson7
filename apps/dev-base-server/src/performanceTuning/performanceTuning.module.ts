import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PerformanceTuningModuleBase } from "./base/performanceTuning.module.base";
import { PerformanceTuningService } from "./performanceTuning.service";
import { PerformanceTuningController } from "./performanceTuning.controller";
import { PerformanceTuningResolver } from "./performanceTuning.resolver";

@Module({
  imports: [PerformanceTuningModuleBase, forwardRef(() => AuthModule)],
  controllers: [PerformanceTuningController],
  providers: [PerformanceTuningService, PerformanceTuningResolver],
  exports: [PerformanceTuningService],
})
export class PerformanceTuningModule {}
