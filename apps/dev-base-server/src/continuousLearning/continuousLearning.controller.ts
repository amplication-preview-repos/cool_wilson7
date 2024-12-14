import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContinuousLearningService } from "./continuousLearning.service";
import { ContinuousLearningControllerBase } from "./base/continuousLearning.controller.base";

@swagger.ApiTags("continuousLearnings")
@common.Controller("continuousLearnings")
export class ContinuousLearningController extends ContinuousLearningControllerBase {
  constructor(
    protected readonly service: ContinuousLearningService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
