import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServerlessContainersService } from "./serverlessContainers.service";
import { ServerlessContainersControllerBase } from "./base/serverlessContainers.controller.base";

@swagger.ApiTags("serverlessContainers")
@common.Controller("serverlessContainers")
export class ServerlessContainersController extends ServerlessContainersControllerBase {
  constructor(
    protected readonly service: ServerlessContainersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
