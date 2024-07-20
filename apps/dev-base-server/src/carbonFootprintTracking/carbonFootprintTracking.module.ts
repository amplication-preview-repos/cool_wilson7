import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CarbonFootprintTrackingModuleBase } from "./base/carbonFootprintTracking.module.base";
import { CarbonFootprintTrackingService } from "./carbonFootprintTracking.service";
import { CarbonFootprintTrackingController } from "./carbonFootprintTracking.controller";
import { CarbonFootprintTrackingResolver } from "./carbonFootprintTracking.resolver";

@Module({
  imports: [CarbonFootprintTrackingModuleBase, forwardRef(() => AuthModule)],
  controllers: [CarbonFootprintTrackingController],
  providers: [CarbonFootprintTrackingService, CarbonFootprintTrackingResolver],
  exports: [CarbonFootprintTrackingService],
})
export class CarbonFootprintTrackingModule {}
