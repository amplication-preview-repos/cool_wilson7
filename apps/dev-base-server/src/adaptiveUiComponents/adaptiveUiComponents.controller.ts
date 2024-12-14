import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AdaptiveUiComponentsService } from "./adaptiveUiComponents.service";
import { AdaptiveUiComponentsControllerBase } from "./base/adaptiveUiComponents.controller.base";

@swagger.ApiTags("adaptiveUiComponents")
@common.Controller("adaptiveUiComponents")
export class AdaptiveUiComponentsController extends AdaptiveUiComponentsControllerBase {
  constructor(
    protected readonly service: AdaptiveUiComponentsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
