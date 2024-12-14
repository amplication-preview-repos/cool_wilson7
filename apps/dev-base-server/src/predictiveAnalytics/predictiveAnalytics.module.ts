import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PredictiveAnalyticsModuleBase } from "./base/predictiveAnalytics.module.base";
import { PredictiveAnalyticsService } from "./predictiveAnalytics.service";
import { PredictiveAnalyticsController } from "./predictiveAnalytics.controller";
import { PredictiveAnalyticsResolver } from "./predictiveAnalytics.resolver";

@Module({
  imports: [PredictiveAnalyticsModuleBase, forwardRef(() => AuthModule)],
  controllers: [PredictiveAnalyticsController],
  providers: [PredictiveAnalyticsService, PredictiveAnalyticsResolver],
  exports: [PredictiveAnalyticsService],
})
export class PredictiveAnalyticsModule {}
