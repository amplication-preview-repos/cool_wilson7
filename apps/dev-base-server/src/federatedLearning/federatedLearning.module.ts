import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FederatedLearningModuleBase } from "./base/federatedLearning.module.base";
import { FederatedLearningService } from "./federatedLearning.service";
import { FederatedLearningController } from "./federatedLearning.controller";
import { FederatedLearningResolver } from "./federatedLearning.resolver";

@Module({
  imports: [FederatedLearningModuleBase, forwardRef(() => AuthModule)],
  controllers: [FederatedLearningController],
  providers: [FederatedLearningService, FederatedLearningResolver],
  exports: [FederatedLearningService],
})
export class FederatedLearningModule {}
