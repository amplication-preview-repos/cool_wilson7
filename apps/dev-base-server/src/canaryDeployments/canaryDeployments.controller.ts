import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CanaryDeploymentsService } from "./canaryDeployments.service";
import { CanaryDeploymentsControllerBase } from "./base/canaryDeployments.controller.base";

@swagger.ApiTags("canaryDeployments")
@common.Controller("canaryDeployments")
export class CanaryDeploymentsController extends CanaryDeploymentsControllerBase {
  constructor(
    protected readonly service: CanaryDeploymentsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
