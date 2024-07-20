import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DatabaseQueryOptimizationModuleBase } from "./base/databaseQueryOptimization.module.base";
import { DatabaseQueryOptimizationService } from "./databaseQueryOptimization.service";
import { DatabaseQueryOptimizationController } from "./databaseQueryOptimization.controller";
import { DatabaseQueryOptimizationResolver } from "./databaseQueryOptimization.resolver";

@Module({
  imports: [DatabaseQueryOptimizationModuleBase, forwardRef(() => AuthModule)],
  controllers: [DatabaseQueryOptimizationController],
  providers: [
    DatabaseQueryOptimizationService,
    DatabaseQueryOptimizationResolver,
  ],
  exports: [DatabaseQueryOptimizationService],
})
export class DatabaseQueryOptimizationModule {}
