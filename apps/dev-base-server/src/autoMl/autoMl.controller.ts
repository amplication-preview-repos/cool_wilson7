import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AutoMlService } from "./autoMl.service";
import { AutoMlControllerBase } from "./base/autoMl.controller.base";

@swagger.ApiTags("autoMls")
@common.Controller("autoMls")
export class AutoMlController extends AutoMlControllerBase {
  constructor(
    protected readonly service: AutoMlService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
