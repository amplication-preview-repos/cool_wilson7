import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ExplainableAiToolsModuleBase } from "./base/explainableAiTools.module.base";
import { ExplainableAiToolsService } from "./explainableAiTools.service";
import { ExplainableAiToolsController } from "./explainableAiTools.controller";
import { ExplainableAiToolsResolver } from "./explainableAiTools.resolver";

@Module({
  imports: [ExplainableAiToolsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ExplainableAiToolsController],
  providers: [ExplainableAiToolsService, ExplainableAiToolsResolver],
  exports: [ExplainableAiToolsService],
})
export class ExplainableAiToolsModule {}
