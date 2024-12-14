import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AutomatedFeatureEngineeringModuleBase } from "./base/automatedFeatureEngineering.module.base";
import { AutomatedFeatureEngineeringService } from "./automatedFeatureEngineering.service";
import { AutomatedFeatureEngineeringController } from "./automatedFeatureEngineering.controller";
import { AutomatedFeatureEngineeringResolver } from "./automatedFeatureEngineering.resolver";

@Module({
  imports: [
    AutomatedFeatureEngineeringModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [AutomatedFeatureEngineeringController],
  providers: [
    AutomatedFeatureEngineeringService,
    AutomatedFeatureEngineeringResolver,
  ],
  exports: [AutomatedFeatureEngineeringService],
})
export class AutomatedFeatureEngineeringModule {}
