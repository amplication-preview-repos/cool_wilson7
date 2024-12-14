import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContextAwareHelpService } from "./contextAwareHelp.service";
import { ContextAwareHelpControllerBase } from "./base/contextAwareHelp.controller.base";

@swagger.ApiTags("contextAwareHelps")
@common.Controller("contextAwareHelps")
export class ContextAwareHelpController extends ContextAwareHelpControllerBase {
  constructor(
    protected readonly service: ContextAwareHelpService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
