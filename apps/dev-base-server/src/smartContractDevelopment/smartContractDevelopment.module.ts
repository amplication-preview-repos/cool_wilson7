import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SmartContractDevelopmentModuleBase } from "./base/smartContractDevelopment.module.base";
import { SmartContractDevelopmentService } from "./smartContractDevelopment.service";
import { SmartContractDevelopmentController } from "./smartContractDevelopment.controller";
import { SmartContractDevelopmentResolver } from "./smartContractDevelopment.resolver";

@Module({
  imports: [SmartContractDevelopmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [SmartContractDevelopmentController],
  providers: [
    SmartContractDevelopmentService,
    SmartContractDevelopmentResolver,
  ],
  exports: [SmartContractDevelopmentService],
})
export class SmartContractDevelopmentModule {}
