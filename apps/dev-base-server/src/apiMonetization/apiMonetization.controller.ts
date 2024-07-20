import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ApiMonetizationService } from "./apiMonetization.service";
import { ApiMonetizationControllerBase } from "./base/apiMonetization.controller.base";

@swagger.ApiTags("apiMonetizations")
@common.Controller("apiMonetizations")
export class ApiMonetizationController extends ApiMonetizationControllerBase {
  constructor(
    protected readonly service: ApiMonetizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
