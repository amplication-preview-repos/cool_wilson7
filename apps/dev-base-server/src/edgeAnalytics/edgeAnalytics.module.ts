import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EdgeAnalyticsModuleBase } from "./base/edgeAnalytics.module.base";
import { EdgeAnalyticsService } from "./edgeAnalytics.service";
import { EdgeAnalyticsController } from "./edgeAnalytics.controller";
import { EdgeAnalyticsResolver } from "./edgeAnalytics.resolver";

@Module({
  imports: [EdgeAnalyticsModuleBase, forwardRef(() => AuthModule)],
  controllers: [EdgeAnalyticsController],
  providers: [EdgeAnalyticsService, EdgeAnalyticsResolver],
  exports: [EdgeAnalyticsService],
})
export class EdgeAnalyticsModule {}
