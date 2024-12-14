import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AutomatedThreatDetectionService } from "./automatedThreatDetection.service";
import { AutomatedThreatDetectionControllerBase } from "./base/automatedThreatDetection.controller.base";

@swagger.ApiTags("automatedThreatDetections")
@common.Controller("automatedThreatDetections")
export class AutomatedThreatDetectionController extends AutomatedThreatDetectionControllerBase {
  constructor(
    protected readonly service: AutomatedThreatDetectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
