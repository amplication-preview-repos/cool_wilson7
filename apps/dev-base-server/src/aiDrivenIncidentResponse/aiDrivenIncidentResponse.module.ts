import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AiDrivenIncidentResponseModuleBase } from "./base/aiDrivenIncidentResponse.module.base";
import { AiDrivenIncidentResponseService } from "./aiDrivenIncidentResponse.service";
import { AiDrivenIncidentResponseController } from "./aiDrivenIncidentResponse.controller";
import { AiDrivenIncidentResponseResolver } from "./aiDrivenIncidentResponse.resolver";

@Module({
  imports: [AiDrivenIncidentResponseModuleBase, forwardRef(() => AuthModule)],
  controllers: [AiDrivenIncidentResponseController],
  providers: [
    AiDrivenIncidentResponseService,
    AiDrivenIncidentResponseResolver,
  ],
  exports: [AiDrivenIncidentResponseService],
})
export class AiDrivenIncidentResponseModule {}
