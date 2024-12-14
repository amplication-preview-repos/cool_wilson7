import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContinuousAuthenticationService } from "./continuousAuthentication.service";
import { ContinuousAuthenticationControllerBase } from "./base/continuousAuthentication.controller.base";

@swagger.ApiTags("continuousAuthentications")
@common.Controller("continuousAuthentications")
export class ContinuousAuthenticationController extends ContinuousAuthenticationControllerBase {
  constructor(
    protected readonly service: ContinuousAuthenticationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
