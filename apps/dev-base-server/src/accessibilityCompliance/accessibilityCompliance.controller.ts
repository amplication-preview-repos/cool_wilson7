import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccessibilityComplianceService } from "./accessibilityCompliance.service";
import { AccessibilityComplianceControllerBase } from "./base/accessibilityCompliance.controller.base";

@swagger.ApiTags("accessibilityCompliances")
@common.Controller("accessibilityCompliances")
export class AccessibilityComplianceController extends AccessibilityComplianceControllerBase {
  constructor(
    protected readonly service: AccessibilityComplianceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
