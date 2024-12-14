import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PlatformSpecificOptimizationsService } from "./platformSpecificOptimizations.service";
import { PlatformSpecificOptimizationsControllerBase } from "./base/platformSpecificOptimizations.controller.base";

@swagger.ApiTags("platformSpecificOptimizations")
@common.Controller("platformSpecificOptimizations")
export class PlatformSpecificOptimizationsController extends PlatformSpecificOptimizationsControllerBase {
  constructor(
    protected readonly service: PlatformSpecificOptimizationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
