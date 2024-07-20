import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ArAppPrototypingModuleBase } from "./base/arAppPrototyping.module.base";
import { ArAppPrototypingService } from "./arAppPrototyping.service";
import { ArAppPrototypingController } from "./arAppPrototyping.controller";
import { ArAppPrototypingResolver } from "./arAppPrototyping.resolver";

@Module({
  imports: [ArAppPrototypingModuleBase, forwardRef(() => AuthModule)],
  controllers: [ArAppPrototypingController],
  providers: [ArAppPrototypingService, ArAppPrototypingResolver],
  exports: [ArAppPrototypingService],
})
export class ArAppPrototypingModule {}
