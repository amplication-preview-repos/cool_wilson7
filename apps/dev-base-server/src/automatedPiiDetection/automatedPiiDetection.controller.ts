import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AutomatedPiiDetectionService } from "./automatedPiiDetection.service";
import { AutomatedPiiDetectionControllerBase } from "./base/automatedPiiDetection.controller.base";

@swagger.ApiTags("automatedPiiDetections")
@common.Controller("automatedPiiDetections")
export class AutomatedPiiDetectionController extends AutomatedPiiDetectionControllerBase {
  constructor(
    protected readonly service: AutomatedPiiDetectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
