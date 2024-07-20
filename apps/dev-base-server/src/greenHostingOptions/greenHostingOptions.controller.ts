import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GreenHostingOptionsService } from "./greenHostingOptions.service";
import { GreenHostingOptionsControllerBase } from "./base/greenHostingOptions.controller.base";

@swagger.ApiTags("greenHostingOptions")
@common.Controller("greenHostingOptions")
export class GreenHostingOptionsController extends GreenHostingOptionsControllerBase {
  constructor(
    protected readonly service: GreenHostingOptionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
