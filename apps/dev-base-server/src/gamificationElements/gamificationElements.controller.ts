import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GamificationElementsService } from "./gamificationElements.service";
import { GamificationElementsControllerBase } from "./base/gamificationElements.controller.base";

@swagger.ApiTags("gamificationElements")
@common.Controller("gamificationElements")
export class GamificationElementsController extends GamificationElementsControllerBase {
  constructor(
    protected readonly service: GamificationElementsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
