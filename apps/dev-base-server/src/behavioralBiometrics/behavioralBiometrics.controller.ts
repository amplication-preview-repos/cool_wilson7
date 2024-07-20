import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BehavioralBiometricsService } from "./behavioralBiometrics.service";
import { BehavioralBiometricsControllerBase } from "./base/behavioralBiometrics.controller.base";

@swagger.ApiTags("behavioralBiometrics")
@common.Controller("behavioralBiometrics")
export class BehavioralBiometricsController extends BehavioralBiometricsControllerBase {
  constructor(
    protected readonly service: BehavioralBiometricsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
