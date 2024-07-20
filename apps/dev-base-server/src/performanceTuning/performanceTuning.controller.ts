import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PerformanceTuningService } from "./performanceTuning.service";
import { PerformanceTuningControllerBase } from "./base/performanceTuning.controller.base";

@swagger.ApiTags("performanceTunings")
@common.Controller("performanceTunings")
export class PerformanceTuningController extends PerformanceTuningControllerBase {
  constructor(
    protected readonly service: PerformanceTuningService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
