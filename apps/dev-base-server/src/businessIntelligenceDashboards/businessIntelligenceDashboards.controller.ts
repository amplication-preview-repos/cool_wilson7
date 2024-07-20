import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BusinessIntelligenceDashboardsService } from "./businessIntelligenceDashboards.service";
import { BusinessIntelligenceDashboardsControllerBase } from "./base/businessIntelligenceDashboards.controller.base";

@swagger.ApiTags("businessIntelligenceDashboards")
@common.Controller("businessIntelligenceDashboards")
export class BusinessIntelligenceDashboardsController extends BusinessIntelligenceDashboardsControllerBase {
  constructor(
    protected readonly service: BusinessIntelligenceDashboardsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
