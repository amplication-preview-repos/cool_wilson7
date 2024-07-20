import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CodeSynchronizationService } from "./codeSynchronization.service";
import { CodeSynchronizationControllerBase } from "./base/codeSynchronization.controller.base";

@swagger.ApiTags("codeSynchronizations")
@common.Controller("codeSynchronizations")
export class CodeSynchronizationController extends CodeSynchronizationControllerBase {
  constructor(
    protected readonly service: CodeSynchronizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
