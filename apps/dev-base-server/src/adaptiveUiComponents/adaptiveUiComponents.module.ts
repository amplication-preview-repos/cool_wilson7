import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AdaptiveUiComponentsModuleBase } from "./base/adaptiveUiComponents.module.base";
import { AdaptiveUiComponentsService } from "./adaptiveUiComponents.service";
import { AdaptiveUiComponentsController } from "./adaptiveUiComponents.controller";
import { AdaptiveUiComponentsResolver } from "./adaptiveUiComponents.resolver";

@Module({
  imports: [AdaptiveUiComponentsModuleBase, forwardRef(() => AuthModule)],
  controllers: [AdaptiveUiComponentsController],
  providers: [AdaptiveUiComponentsService, AdaptiveUiComponentsResolver],
  exports: [AdaptiveUiComponentsService],
})
export class AdaptiveUiComponentsModule {}
