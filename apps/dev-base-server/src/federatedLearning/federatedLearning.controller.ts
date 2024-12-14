import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FederatedLearningService } from "./federatedLearning.service";
import { FederatedLearningControllerBase } from "./base/federatedLearning.controller.base";

@swagger.ApiTags("federatedLearnings")
@common.Controller("federatedLearnings")
export class FederatedLearningController extends FederatedLearningControllerBase {
  constructor(
    protected readonly service: FederatedLearningService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
