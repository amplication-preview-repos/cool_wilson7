import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DecentralizedIdentityService } from "./decentralizedIdentity.service";
import { DecentralizedIdentityControllerBase } from "./base/decentralizedIdentity.controller.base";

@swagger.ApiTags("decentralizedIdentities")
@common.Controller("decentralizedIdentities")
export class DecentralizedIdentityController extends DecentralizedIdentityControllerBase {
  constructor(
    protected readonly service: DecentralizedIdentityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
