import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExplainableAiToolsService } from "./explainableAiTools.service";
import { ExplainableAiToolsControllerBase } from "./base/explainableAiTools.controller.base";

@swagger.ApiTags("explainableAiTools")
@common.Controller("explainableAiTools")
export class ExplainableAiToolsController extends ExplainableAiToolsControllerBase {
  constructor(
    protected readonly service: ExplainableAiToolsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
