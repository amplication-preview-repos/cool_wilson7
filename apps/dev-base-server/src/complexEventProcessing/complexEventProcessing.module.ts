import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ComplexEventProcessingModuleBase } from "./base/complexEventProcessing.module.base";
import { ComplexEventProcessingService } from "./complexEventProcessing.service";
import { ComplexEventProcessingController } from "./complexEventProcessing.controller";
import { ComplexEventProcessingResolver } from "./complexEventProcessing.resolver";

@Module({
  imports: [ComplexEventProcessingModuleBase, forwardRef(() => AuthModule)],
  controllers: [ComplexEventProcessingController],
  providers: [ComplexEventProcessingService, ComplexEventProcessingResolver],
  exports: [ComplexEventProcessingService],
})
export class ComplexEventProcessingModule {}
