import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WorkflowBuildersModuleBase } from "./base/workflowBuilders.module.base";
import { WorkflowBuildersService } from "./workflowBuilders.service";
import { WorkflowBuildersController } from "./workflowBuilders.controller";
import { WorkflowBuildersResolver } from "./workflowBuilders.resolver";

@Module({
  imports: [WorkflowBuildersModuleBase, forwardRef(() => AuthModule)],
  controllers: [WorkflowBuildersController],
  providers: [WorkflowBuildersService, WorkflowBuildersResolver],
  exports: [WorkflowBuildersService],
})
export class WorkflowBuildersModule {}
