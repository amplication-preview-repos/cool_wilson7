import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EdgeComputingFunctionsService } from "./edgeComputingFunctions.service";
import { EdgeComputingFunctionsControllerBase } from "./base/edgeComputingFunctions.controller.base";

@swagger.ApiTags("edgeComputingFunctions")
@common.Controller("edgeComputingFunctions")
export class EdgeComputingFunctionsController extends EdgeComputingFunctionsControllerBase {
  constructor(
    protected readonly service: EdgeComputingFunctionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
