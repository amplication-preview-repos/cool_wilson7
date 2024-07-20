import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EdgeAnalyticsService } from "./edgeAnalytics.service";
import { EdgeAnalyticsControllerBase } from "./base/edgeAnalytics.controller.base";

@swagger.ApiTags("edgeAnalytics")
@common.Controller("edgeAnalytics")
export class EdgeAnalyticsController extends EdgeAnalyticsControllerBase {
  constructor(
    protected readonly service: EdgeAnalyticsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
