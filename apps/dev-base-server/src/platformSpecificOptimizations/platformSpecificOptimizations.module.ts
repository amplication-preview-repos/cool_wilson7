import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlatformSpecificOptimizationsModuleBase } from "./base/platformSpecificOptimizations.module.base";
import { PlatformSpecificOptimizationsService } from "./platformSpecificOptimizations.service";
import { PlatformSpecificOptimizationsController } from "./platformSpecificOptimizations.controller";
import { PlatformSpecificOptimizationsResolver } from "./platformSpecificOptimizations.resolver";

@Module({
  imports: [
    PlatformSpecificOptimizationsModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [PlatformSpecificOptimizationsController],
  providers: [
    PlatformSpecificOptimizationsService,
    PlatformSpecificOptimizationsResolver,
  ],
  exports: [PlatformSpecificOptimizationsService],
})
export class PlatformSpecificOptimizationsModule {}
