import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserBehaviorModelingService } from "./userBehaviorModeling.service";
import { UserBehaviorModelingControllerBase } from "./base/userBehaviorModeling.controller.base";

@swagger.ApiTags("userBehaviorModelings")
@common.Controller("userBehaviorModelings")
export class UserBehaviorModelingController extends UserBehaviorModelingControllerBase {
  constructor(
    protected readonly service: UserBehaviorModelingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
