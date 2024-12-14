import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DigitalTwinSupportService } from "./digitalTwinSupport.service";
import { DigitalTwinSupportControllerBase } from "./base/digitalTwinSupport.controller.base";

@swagger.ApiTags("digitalTwinSupports")
@common.Controller("digitalTwinSupports")
export class DigitalTwinSupportController extends DigitalTwinSupportControllerBase {
  constructor(
    protected readonly service: DigitalTwinSupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
