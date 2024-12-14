import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PredictiveScalingService } from "./predictiveScaling.service";
import { PredictiveScalingControllerBase } from "./base/predictiveScaling.controller.base";

@swagger.ApiTags("predictiveScalings")
@common.Controller("predictiveScalings")
export class PredictiveScalingController extends PredictiveScalingControllerBase {
  constructor(
    protected readonly service: PredictiveScalingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
