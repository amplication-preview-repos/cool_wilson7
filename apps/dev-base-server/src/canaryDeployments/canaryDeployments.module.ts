import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CanaryDeploymentsModuleBase } from "./base/canaryDeployments.module.base";
import { CanaryDeploymentsService } from "./canaryDeployments.service";
import { CanaryDeploymentsController } from "./canaryDeployments.controller";
import { CanaryDeploymentsResolver } from "./canaryDeployments.resolver";

@Module({
  imports: [CanaryDeploymentsModuleBase, forwardRef(() => AuthModule)],
  controllers: [CanaryDeploymentsController],
  providers: [CanaryDeploymentsService, CanaryDeploymentsResolver],
  exports: [CanaryDeploymentsService],
})
export class CanaryDeploymentsModule {}
