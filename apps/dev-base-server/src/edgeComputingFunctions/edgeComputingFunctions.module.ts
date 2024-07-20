import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EdgeComputingFunctionsModuleBase } from "./base/edgeComputingFunctions.module.base";
import { EdgeComputingFunctionsService } from "./edgeComputingFunctions.service";
import { EdgeComputingFunctionsController } from "./edgeComputingFunctions.controller";
import { EdgeComputingFunctionsResolver } from "./edgeComputingFunctions.resolver";

@Module({
  imports: [EdgeComputingFunctionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [EdgeComputingFunctionsController],
  providers: [EdgeComputingFunctionsService, EdgeComputingFunctionsResolver],
  exports: [EdgeComputingFunctionsService],
})
export class EdgeComputingFunctionsModule {}
