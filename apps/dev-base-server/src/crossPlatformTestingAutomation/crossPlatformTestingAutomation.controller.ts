import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CrossPlatformTestingAutomationService } from "./crossPlatformTestingAutomation.service";
import { CrossPlatformTestingAutomationControllerBase } from "./base/crossPlatformTestingAutomation.controller.base";

@swagger.ApiTags("crossPlatformTestingAutomations")
@common.Controller("crossPlatformTestingAutomations")
export class CrossPlatformTestingAutomationController extends CrossPlatformTestingAutomationControllerBase {
  constructor(
    protected readonly service: CrossPlatformTestingAutomationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
