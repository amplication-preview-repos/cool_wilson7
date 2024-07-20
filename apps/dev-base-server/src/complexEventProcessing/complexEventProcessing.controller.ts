import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComplexEventProcessingService } from "./complexEventProcessing.service";
import { ComplexEventProcessingControllerBase } from "./base/complexEventProcessing.controller.base";

@swagger.ApiTags("complexEventProcessings")
@common.Controller("complexEventProcessings")
export class ComplexEventProcessingController extends ComplexEventProcessingControllerBase {
  constructor(
    protected readonly service: ComplexEventProcessingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
