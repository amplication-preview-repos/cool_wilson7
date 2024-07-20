import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CrossPlatformDevelopmentService } from "./crossPlatformDevelopment.service";
import { CrossPlatformDevelopmentControllerBase } from "./base/crossPlatformDevelopment.controller.base";

@swagger.ApiTags("crossPlatformDevelopments")
@common.Controller("crossPlatformDevelopments")
export class CrossPlatformDevelopmentController extends CrossPlatformDevelopmentControllerBase {
  constructor(
    protected readonly service: CrossPlatformDevelopmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
