import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PredictiveAnalyticsService } from "./predictiveAnalytics.service";
import { PredictiveAnalyticsControllerBase } from "./base/predictiveAnalytics.controller.base";

@swagger.ApiTags("predictiveAnalytics")
@common.Controller("predictiveAnalytics")
export class PredictiveAnalyticsController extends PredictiveAnalyticsControllerBase {
  constructor(
    protected readonly service: PredictiveAnalyticsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
