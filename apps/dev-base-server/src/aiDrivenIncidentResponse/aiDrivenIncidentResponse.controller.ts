import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AiDrivenIncidentResponseService } from "./aiDrivenIncidentResponse.service";
import { AiDrivenIncidentResponseControllerBase } from "./base/aiDrivenIncidentResponse.controller.base";

@swagger.ApiTags("aiDrivenIncidentResponses")
@common.Controller("aiDrivenIncidentResponses")
export class AiDrivenIncidentResponseController extends AiDrivenIncidentResponseControllerBase {
  constructor(
    protected readonly service: AiDrivenIncidentResponseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
