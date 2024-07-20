import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SmartContractDevelopmentService } from "./smartContractDevelopment.service";
import { SmartContractDevelopmentControllerBase } from "./base/smartContractDevelopment.controller.base";

@swagger.ApiTags("smartContractDevelopments")
@common.Controller("smartContractDevelopments")
export class SmartContractDevelopmentController extends SmartContractDevelopmentControllerBase {
  constructor(
    protected readonly service: SmartContractDevelopmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
