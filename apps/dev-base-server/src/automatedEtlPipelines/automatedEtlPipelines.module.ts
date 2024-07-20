import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AutomatedEtlPipelinesModuleBase } from "./base/automatedEtlPipelines.module.base";
import { AutomatedEtlPipelinesService } from "./automatedEtlPipelines.service";
import { AutomatedEtlPipelinesController } from "./automatedEtlPipelines.controller";
import { AutomatedEtlPipelinesResolver } from "./automatedEtlPipelines.resolver";

@Module({
  imports: [AutomatedEtlPipelinesModuleBase, forwardRef(() => AuthModule)],
  controllers: [AutomatedEtlPipelinesController],
  providers: [AutomatedEtlPipelinesService, AutomatedEtlPipelinesResolver],
  exports: [AutomatedEtlPipelinesService],
})
export class AutomatedEtlPipelinesModule {}
