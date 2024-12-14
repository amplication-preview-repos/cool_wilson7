import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VisualProgrammingInterfacesService } from "./visualProgrammingInterfaces.service";
import { VisualProgrammingInterfacesControllerBase } from "./base/visualProgrammingInterfaces.controller.base";

@swagger.ApiTags("visualProgrammingInterfaces")
@common.Controller("visualProgrammingInterfaces")
export class VisualProgrammingInterfacesController extends VisualProgrammingInterfacesControllerBase {
  constructor(
    protected readonly service: VisualProgrammingInterfacesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
