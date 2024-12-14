import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RealTimeDatabaseModuleBase } from "./base/realTimeDatabase.module.base";
import { RealTimeDatabaseService } from "./realTimeDatabase.service";
import { RealTimeDatabaseController } from "./realTimeDatabase.controller";
import { RealTimeDatabaseResolver } from "./realTimeDatabase.resolver";

@Module({
  imports: [RealTimeDatabaseModuleBase, forwardRef(() => AuthModule)],
  controllers: [RealTimeDatabaseController],
  providers: [RealTimeDatabaseService, RealTimeDatabaseResolver],
  exports: [RealTimeDatabaseService],
})
export class RealTimeDatabaseModule {}
