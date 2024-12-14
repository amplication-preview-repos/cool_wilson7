import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StreamProcessingService } from "./streamProcessing.service";
import { StreamProcessingControllerBase } from "./base/streamProcessing.controller.base";

@swagger.ApiTags("streamProcessings")
@common.Controller("streamProcessings")
export class StreamProcessingController extends StreamProcessingControllerBase {
  constructor(
    protected readonly service: StreamProcessingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
