import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApiDesignService } from "./apiDesign.service";
import { ApiDesignControllerBase } from "./base/apiDesign.controller.base";

@swagger.ApiTags("apiDesigns")
@common.Controller("apiDesigns")
export class ApiDesignController extends ApiDesignControllerBase {
  constructor(
    protected readonly service: ApiDesignService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
