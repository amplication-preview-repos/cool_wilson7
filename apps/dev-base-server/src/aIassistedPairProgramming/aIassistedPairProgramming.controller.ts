import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AIassistedPairProgrammingService } from "./aIassistedPairProgramming.service";
import { AIassistedPairProgrammingControllerBase } from "./base/aIassistedPairProgramming.controller.base";

@swagger.ApiTags("aIassistedPairProgrammings")
@common.Controller("aIassistedPairProgrammings")
export class AIassistedPairProgrammingController extends AIassistedPairProgrammingControllerBase {
  constructor(
    protected readonly service: AIassistedPairProgrammingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
