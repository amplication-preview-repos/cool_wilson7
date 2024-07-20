import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AutomatedComplianceChecksService } from "./automatedComplianceChecks.service";
import { AutomatedComplianceChecksControllerBase } from "./base/automatedComplianceChecks.controller.base";

@swagger.ApiTags("automatedComplianceChecks")
@common.Controller("automatedComplianceChecks")
export class AutomatedComplianceChecksController extends AutomatedComplianceChecksControllerBase {
  constructor(
    protected readonly service: AutomatedComplianceChecksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
