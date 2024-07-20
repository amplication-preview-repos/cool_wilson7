import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WorkflowBuildersService } from "./workflowBuilders.service";
import { WorkflowBuildersControllerBase } from "./base/workflowBuilders.controller.base";

@swagger.ApiTags("workflowBuilders")
@common.Controller("workflowBuilders")
export class WorkflowBuildersController extends WorkflowBuildersControllerBase {
  constructor(
    protected readonly service: WorkflowBuildersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
