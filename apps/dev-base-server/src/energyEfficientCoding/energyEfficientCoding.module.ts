import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EnergyEfficientCodingModuleBase } from "./base/energyEfficientCoding.module.base";
import { EnergyEfficientCodingService } from "./energyEfficientCoding.service";
import { EnergyEfficientCodingController } from "./energyEfficientCoding.controller";
import { EnergyEfficientCodingResolver } from "./energyEfficientCoding.resolver";

@Module({
  imports: [EnergyEfficientCodingModuleBase, forwardRef(() => AuthModule)],
  controllers: [EnergyEfficientCodingController],
  providers: [EnergyEfficientCodingService, EnergyEfficientCodingResolver],
  exports: [EnergyEfficientCodingService],
})
export class EnergyEfficientCodingModule {}
