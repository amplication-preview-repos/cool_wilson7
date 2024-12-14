import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CollaborativeCodingEnvironmentsService } from "./collaborativeCodingEnvironments.service";
import { CollaborativeCodingEnvironmentsControllerBase } from "./base/collaborativeCodingEnvironments.controller.base";

@swagger.ApiTags("collaborativeCodingEnvironments")
@common.Controller("collaborativeCodingEnvironments")
export class CollaborativeCodingEnvironmentsController extends CollaborativeCodingEnvironmentsControllerBase {
  constructor(
    protected readonly service: CollaborativeCodingEnvironmentsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
