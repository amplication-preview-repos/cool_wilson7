import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TimeSeriesDatabaseService } from "./timeSeriesDatabase.service";
import { TimeSeriesDatabaseControllerBase } from "./base/timeSeriesDatabase.controller.base";

@swagger.ApiTags("timeSeriesDatabases")
@common.Controller("timeSeriesDatabases")
export class TimeSeriesDatabaseController extends TimeSeriesDatabaseControllerBase {
  constructor(
    protected readonly service: TimeSeriesDatabaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
