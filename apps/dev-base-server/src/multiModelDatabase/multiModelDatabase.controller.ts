import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MultiModelDatabaseService } from "./multiModelDatabase.service";
import { MultiModelDatabaseControllerBase } from "./base/multiModelDatabase.controller.base";

@swagger.ApiTags("multiModelDatabases")
@common.Controller("multiModelDatabases")
export class MultiModelDatabaseController extends MultiModelDatabaseControllerBase {
  constructor(
    protected readonly service: MultiModelDatabaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
