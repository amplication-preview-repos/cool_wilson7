import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GitOpsWorkflowModuleBase } from "./base/gitOpsWorkflow.module.base";
import { GitOpsWorkflowService } from "./gitOpsWorkflow.service";
import { GitOpsWorkflowController } from "./gitOpsWorkflow.controller";
import { GitOpsWorkflowResolver } from "./gitOpsWorkflow.resolver";

@Module({
  imports: [GitOpsWorkflowModuleBase, forwardRef(() => AuthModule)],
  controllers: [GitOpsWorkflowController],
  providers: [GitOpsWorkflowService, GitOpsWorkflowResolver],
  exports: [GitOpsWorkflowService],
})
export class GitOpsWorkflowModule {}
