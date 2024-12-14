import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ServerlessContainersResolverBase } from "./base/serverlessContainers.resolver.base";
import { ServerlessContainers } from "./base/ServerlessContainers";
import { ServerlessContainersService } from "./serverlessContainers.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ServerlessContainers)
export class ServerlessContainersResolver extends ServerlessContainersResolverBase {
  constructor(
    protected readonly service: ServerlessContainersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
