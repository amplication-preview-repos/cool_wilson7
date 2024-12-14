import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContinuousLearningModuleBase } from "./base/continuousLearning.module.base";
import { ContinuousLearningService } from "./continuousLearning.service";
import { ContinuousLearningController } from "./continuousLearning.controller";
import { ContinuousLearningResolver } from "./continuousLearning.resolver";

@Module({
  imports: [ContinuousLearningModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContinuousLearningController],
  providers: [ContinuousLearningService, ContinuousLearningResolver],
  exports: [ContinuousLearningService],
})
export class ContinuousLearningModule {}
