import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DataLineageTrackingModuleBase } from "./base/dataLineageTracking.module.base";
import { DataLineageTrackingService } from "./dataLineageTracking.service";
import { DataLineageTrackingController } from "./dataLineageTracking.controller";
import { DataLineageTrackingResolver } from "./dataLineageTracking.resolver";

@Module({
  imports: [DataLineageTrackingModuleBase, forwardRef(() => AuthModule)],
  controllers: [DataLineageTrackingController],
  providers: [DataLineageTrackingService, DataLineageTrackingResolver],
  exports: [DataLineageTrackingService],
})
export class DataLineageTrackingModule {}
