import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EnergyEfficientCodingService } from "./energyEfficientCoding.service";
import { EnergyEfficientCodingControllerBase } from "./base/energyEfficientCoding.controller.base";

@swagger.ApiTags("energyEfficientCodings")
@common.Controller("energyEfficientCodings")
export class EnergyEfficientCodingController extends EnergyEfficientCodingControllerBase {
  constructor(
    protected readonly service: EnergyEfficientCodingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
