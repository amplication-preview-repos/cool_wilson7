import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DataLakeIntegrationService } from "./dataLakeIntegration.service";
import { DataLakeIntegrationControllerBase } from "./base/dataLakeIntegration.controller.base";

@swagger.ApiTags("dataLakeIntegrations")
@common.Controller("dataLakeIntegrations")
export class DataLakeIntegrationController extends DataLakeIntegrationControllerBase {
  constructor(
    protected readonly service: DataLakeIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
