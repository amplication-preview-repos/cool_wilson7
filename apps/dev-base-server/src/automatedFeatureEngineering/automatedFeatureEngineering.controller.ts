import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AutomatedFeatureEngineeringService } from "./automatedFeatureEngineering.service";
import { AutomatedFeatureEngineeringControllerBase } from "./base/automatedFeatureEngineering.controller.base";

@swagger.ApiTags("automatedFeatureEngineerings")
@common.Controller("automatedFeatureEngineerings")
export class AutomatedFeatureEngineeringController extends AutomatedFeatureEngineeringControllerBase {
  constructor(
    protected readonly service: AutomatedFeatureEngineeringService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
