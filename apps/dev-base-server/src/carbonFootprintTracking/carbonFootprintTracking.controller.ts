import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CarbonFootprintTrackingService } from "./carbonFootprintTracking.service";
import { CarbonFootprintTrackingControllerBase } from "./base/carbonFootprintTracking.controller.base";

@swagger.ApiTags("carbonFootprintTrackings")
@common.Controller("carbonFootprintTrackings")
export class CarbonFootprintTrackingController extends CarbonFootprintTrackingControllerBase {
  constructor(
    protected readonly service: CarbonFootprintTrackingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
