import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GamificationElementsModuleBase } from "./base/gamificationElements.module.base";
import { GamificationElementsService } from "./gamificationElements.service";
import { GamificationElementsController } from "./gamificationElements.controller";
import { GamificationElementsResolver } from "./gamificationElements.resolver";

@Module({
  imports: [GamificationElementsModuleBase, forwardRef(() => AuthModule)],
  controllers: [GamificationElementsController],
  providers: [GamificationElementsService, GamificationElementsResolver],
  exports: [GamificationElementsService],
})
export class GamificationElementsModule {}
