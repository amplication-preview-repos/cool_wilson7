import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BehavioralBiometricsModuleBase } from "./base/behavioralBiometrics.module.base";
import { BehavioralBiometricsService } from "./behavioralBiometrics.service";
import { BehavioralBiometricsController } from "./behavioralBiometrics.controller";
import { BehavioralBiometricsResolver } from "./behavioralBiometrics.resolver";

@Module({
  imports: [BehavioralBiometricsModuleBase, forwardRef(() => AuthModule)],
  controllers: [BehavioralBiometricsController],
  providers: [BehavioralBiometricsService, BehavioralBiometricsResolver],
  exports: [BehavioralBiometricsService],
})
export class BehavioralBiometricsModule {}
