import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StatefulServerlessService } from "./statefulServerless.service";
import { StatefulServerlessControllerBase } from "./base/statefulServerless.controller.base";

@swagger.ApiTags("statefulServerlesses")
@common.Controller("statefulServerlesses")
export class StatefulServerlessController extends StatefulServerlessControllerBase {
  constructor(
    protected readonly service: StatefulServerlessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
