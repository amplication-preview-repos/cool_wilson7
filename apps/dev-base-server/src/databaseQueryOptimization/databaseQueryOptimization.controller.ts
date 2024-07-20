import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DatabaseQueryOptimizationService } from "./databaseQueryOptimization.service";
import { DatabaseQueryOptimizationControllerBase } from "./base/databaseQueryOptimization.controller.base";

@swagger.ApiTags("databaseQueryOptimizations")
@common.Controller("databaseQueryOptimizations")
export class DatabaseQueryOptimizationController extends DatabaseQueryOptimizationControllerBase {
  constructor(
    protected readonly service: DatabaseQueryOptimizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
