import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BusinessIntelligenceDashboardsModuleBase } from "./base/businessIntelligenceDashboards.module.base";
import { BusinessIntelligenceDashboardsService } from "./businessIntelligenceDashboards.service";
import { BusinessIntelligenceDashboardsController } from "./businessIntelligenceDashboards.controller";
import { BusinessIntelligenceDashboardsResolver } from "./businessIntelligenceDashboards.resolver";

@Module({
  imports: [
    BusinessIntelligenceDashboardsModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [BusinessIntelligenceDashboardsController],
  providers: [
    BusinessIntelligenceDashboardsService,
    BusinessIntelligenceDashboardsResolver,
  ],
  exports: [BusinessIntelligenceDashboardsService],
})
export class BusinessIntelligenceDashboardsModule {}
