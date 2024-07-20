import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GraphQlSupportService } from "./graphQlSupport.service";
import { GraphQlSupportControllerBase } from "./base/graphQlSupport.controller.base";

@swagger.ApiTags("graphQlSupports")
@common.Controller("graphQlSupports")
export class GraphQlSupportController extends GraphQlSupportControllerBase {
  constructor(
    protected readonly service: GraphQlSupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
