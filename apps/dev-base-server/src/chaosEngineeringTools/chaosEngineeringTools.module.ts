import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChaosEngineeringToolsModuleBase } from "./base/chaosEngineeringTools.module.base";
import { ChaosEngineeringToolsService } from "./chaosEngineeringTools.service";
import { ChaosEngineeringToolsController } from "./chaosEngineeringTools.controller";
import { ChaosEngineeringToolsResolver } from "./chaosEngineeringTools.resolver";

@Module({
  imports: [ChaosEngineeringToolsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChaosEngineeringToolsController],
  providers: [ChaosEngineeringToolsService, ChaosEngineeringToolsResolver],
  exports: [ChaosEngineeringToolsService],
})
export class ChaosEngineeringToolsModule {}
