import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TimeSeriesDatabaseModuleBase } from "./base/timeSeriesDatabase.module.base";
import { TimeSeriesDatabaseService } from "./timeSeriesDatabase.service";
import { TimeSeriesDatabaseController } from "./timeSeriesDatabase.controller";
import { TimeSeriesDatabaseResolver } from "./timeSeriesDatabase.resolver";

@Module({
  imports: [TimeSeriesDatabaseModuleBase, forwardRef(() => AuthModule)],
  controllers: [TimeSeriesDatabaseController],
  providers: [TimeSeriesDatabaseService, TimeSeriesDatabaseResolver],
  exports: [TimeSeriesDatabaseService],
})
export class TimeSeriesDatabaseModule {}
