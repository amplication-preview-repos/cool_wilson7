import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnomalyDetectionService } from "./anomalyDetection.service";
import { AnomalyDetectionControllerBase } from "./base/anomalyDetection.controller.base";

@swagger.ApiTags("anomalyDetections")
@common.Controller("anomalyDetections")
export class AnomalyDetectionController extends AnomalyDetectionControllerBase {
  constructor(
    protected readonly service: AnomalyDetectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
