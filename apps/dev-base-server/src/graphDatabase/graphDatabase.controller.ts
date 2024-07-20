import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GraphDatabaseService } from "./graphDatabase.service";
import { GraphDatabaseControllerBase } from "./base/graphDatabase.controller.base";

@swagger.ApiTags("graphDatabases")
@common.Controller("graphDatabases")
export class GraphDatabaseController extends GraphDatabaseControllerBase {
  constructor(
    protected readonly service: GraphDatabaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
