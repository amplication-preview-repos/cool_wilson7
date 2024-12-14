import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ChaosEngineeringToolsService } from "./chaosEngineeringTools.service";
import { ChaosEngineeringToolsControllerBase } from "./base/chaosEngineeringTools.controller.base";

@swagger.ApiTags("chaosEngineeringTools")
@common.Controller("chaosEngineeringTools")
export class ChaosEngineeringToolsController extends ChaosEngineeringToolsControllerBase {
  constructor(
    protected readonly service: ChaosEngineeringToolsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
