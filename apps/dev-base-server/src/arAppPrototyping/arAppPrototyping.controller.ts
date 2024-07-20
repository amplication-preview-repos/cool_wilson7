import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ArAppPrototypingService } from "./arAppPrototyping.service";
import { ArAppPrototypingControllerBase } from "./base/arAppPrototyping.controller.base";

@swagger.ApiTags("arAppPrototypings")
@common.Controller("arAppPrototypings")
export class ArAppPrototypingController extends ArAppPrototypingControllerBase {
  constructor(
    protected readonly service: ArAppPrototypingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
