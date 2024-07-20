import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GitOpsWorkflowService } from "./gitOpsWorkflow.service";
import { GitOpsWorkflowControllerBase } from "./base/gitOpsWorkflow.controller.base";

@swagger.ApiTags("gitOpsWorkflows")
@common.Controller("gitOpsWorkflows")
export class GitOpsWorkflowController extends GitOpsWorkflowControllerBase {
  constructor(
    protected readonly service: GitOpsWorkflowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
