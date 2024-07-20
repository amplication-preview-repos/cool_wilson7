import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SmartCachingStrategiesService } from "./smartCachingStrategies.service";
import { SmartCachingStrategiesControllerBase } from "./base/smartCachingStrategies.controller.base";

@swagger.ApiTags("smartCachingStrategies")
@common.Controller("smartCachingStrategies")
export class SmartCachingStrategiesController extends SmartCachingStrategiesControllerBase {
  constructor(
    protected readonly service: SmartCachingStrategiesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
