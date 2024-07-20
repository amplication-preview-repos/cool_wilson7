import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IoTDeviceManagementService } from "./ioTDeviceManagement.service";
import { IoTDeviceManagementControllerBase } from "./base/ioTDeviceManagement.controller.base";

@swagger.ApiTags("ioTDeviceManagements")
@common.Controller("ioTDeviceManagements")
export class IoTDeviceManagementController extends IoTDeviceManagementControllerBase {
  constructor(
    protected readonly service: IoTDeviceManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
