import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MultiModelDatabaseModuleBase } from "./base/multiModelDatabase.module.base";
import { MultiModelDatabaseService } from "./multiModelDatabase.service";
import { MultiModelDatabaseController } from "./multiModelDatabase.controller";
import { MultiModelDatabaseResolver } from "./multiModelDatabase.resolver";

@Module({
  imports: [MultiModelDatabaseModuleBase, forwardRef(() => AuthModule)],
  controllers: [MultiModelDatabaseController],
  providers: [MultiModelDatabaseService, MultiModelDatabaseResolver],
  exports: [MultiModelDatabaseService],
})
export class MultiModelDatabaseModule {}
