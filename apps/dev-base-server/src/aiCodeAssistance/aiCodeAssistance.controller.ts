import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AiCodeAssistanceService } from "./aiCodeAssistance.service";
import { AiCodeAssistanceControllerBase } from "./base/aiCodeAssistance.controller.base";

@swagger.ApiTags("aiCodeAssistances")
@common.Controller("aiCodeAssistances")
export class AiCodeAssistanceController extends AiCodeAssistanceControllerBase {
  constructor(
    protected readonly service: AiCodeAssistanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
