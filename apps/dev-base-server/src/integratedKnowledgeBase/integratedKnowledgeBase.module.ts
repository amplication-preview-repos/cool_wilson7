import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { IntegratedKnowledgeBaseModuleBase } from "./base/integratedKnowledgeBase.module.base";
import { IntegratedKnowledgeBaseService } from "./integratedKnowledgeBase.service";
import { IntegratedKnowledgeBaseController } from "./integratedKnowledgeBase.controller";
import { IntegratedKnowledgeBaseResolver } from "./integratedKnowledgeBase.resolver";

@Module({
  imports: [IntegratedKnowledgeBaseModuleBase, forwardRef(() => AuthModule)],
  controllers: [IntegratedKnowledgeBaseController],
  providers: [IntegratedKnowledgeBaseService, IntegratedKnowledgeBaseResolver],
  exports: [IntegratedKnowledgeBaseService],
})
export class IntegratedKnowledgeBaseModule {}
