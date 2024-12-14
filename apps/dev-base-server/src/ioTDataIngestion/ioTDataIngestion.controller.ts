import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IoTDataIngestionService } from "./ioTDataIngestion.service";
import { IoTDataIngestionControllerBase } from "./base/ioTDataIngestion.controller.base";

@swagger.ApiTags("ioTDataIngestions")
@common.Controller("ioTDataIngestions")
export class IoTDataIngestionController extends IoTDataIngestionControllerBase {
  constructor(
    protected readonly service: IoTDataIngestionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
