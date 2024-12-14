import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NftManagementService } from "./nftManagement.service";
import { NftManagementControllerBase } from "./base/nftManagement.controller.base";

@swagger.ApiTags("nftManagements")
@common.Controller("nftManagements")
export class NftManagementController extends NftManagementControllerBase {
  constructor(
    protected readonly service: NftManagementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
