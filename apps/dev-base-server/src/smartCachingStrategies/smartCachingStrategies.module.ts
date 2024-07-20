import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SmartCachingStrategiesModuleBase } from "./base/smartCachingStrategies.module.base";
import { SmartCachingStrategiesService } from "./smartCachingStrategies.service";
import { SmartCachingStrategiesController } from "./smartCachingStrategies.controller";
import { SmartCachingStrategiesResolver } from "./smartCachingStrategies.resolver";

@Module({
  imports: [SmartCachingStrategiesModuleBase, forwardRef(() => AuthModule)],
  controllers: [SmartCachingStrategiesController],
  providers: [SmartCachingStrategiesService, SmartCachingStrategiesResolver],
  exports: [SmartCachingStrategiesService],
})
export class SmartCachingStrategiesModule {}
