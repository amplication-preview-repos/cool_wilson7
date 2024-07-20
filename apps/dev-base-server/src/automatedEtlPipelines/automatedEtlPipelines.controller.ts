import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AutomatedEtlPipelinesService } from "./automatedEtlPipelines.service";
import { AutomatedEtlPipelinesControllerBase } from "./base/automatedEtlPipelines.controller.base";

@swagger.ApiTags("automatedEtlPipelines")
@common.Controller("automatedEtlPipelines")
export class AutomatedEtlPipelinesController extends AutomatedEtlPipelinesControllerBase {
  constructor(
    protected readonly service: AutomatedEtlPipelinesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
