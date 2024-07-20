import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DataLineageTrackingService } from "./dataLineageTracking.service";
import { DataLineageTrackingControllerBase } from "./base/dataLineageTracking.controller.base";

@swagger.ApiTags("dataLineageTrackings")
@common.Controller("dataLineageTrackings")
export class DataLineageTrackingController extends DataLineageTrackingControllerBase {
  constructor(
    protected readonly service: DataLineageTrackingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
