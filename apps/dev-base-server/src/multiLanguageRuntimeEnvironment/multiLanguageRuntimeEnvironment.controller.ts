import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MultiLanguageRuntimeEnvironmentService } from "./multiLanguageRuntimeEnvironment.service";
import { MultiLanguageRuntimeEnvironmentControllerBase } from "./base/multiLanguageRuntimeEnvironment.controller.base";

@swagger.ApiTags("multiLanguageRuntimeEnvironments")
@common.Controller("multiLanguageRuntimeEnvironments")
export class MultiLanguageRuntimeEnvironmentController extends MultiLanguageRuntimeEnvironmentControllerBase {
  constructor(
    protected readonly service: MultiLanguageRuntimeEnvironmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
