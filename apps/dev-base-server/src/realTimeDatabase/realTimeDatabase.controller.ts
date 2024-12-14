import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RealTimeDatabaseService } from "./realTimeDatabase.service";
import { RealTimeDatabaseControllerBase } from "./base/realTimeDatabase.controller.base";

@swagger.ApiTags("realTimeDatabases")
@common.Controller("realTimeDatabases")
export class RealTimeDatabaseController extends RealTimeDatabaseControllerBase {
  constructor(
    protected readonly service: RealTimeDatabaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
