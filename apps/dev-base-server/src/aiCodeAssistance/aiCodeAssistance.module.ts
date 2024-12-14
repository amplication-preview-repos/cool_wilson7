import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AiCodeAssistanceModuleBase } from "./base/aiCodeAssistance.module.base";
import { AiCodeAssistanceService } from "./aiCodeAssistance.service";
import { AiCodeAssistanceController } from "./aiCodeAssistance.controller";
import { AiCodeAssistanceResolver } from "./aiCodeAssistance.resolver";

@Module({
  imports: [AiCodeAssistanceModuleBase, forwardRef(() => AuthModule)],
  controllers: [AiCodeAssistanceController],
  providers: [AiCodeAssistanceService, AiCodeAssistanceResolver],
  exports: [AiCodeAssistanceService],
})
export class AiCodeAssistanceModule {}
