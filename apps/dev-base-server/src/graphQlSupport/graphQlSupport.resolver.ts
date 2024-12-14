import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GraphQlSupportResolverBase } from "./base/graphQlSupport.resolver.base";
import { GraphQlSupport } from "./base/GraphQlSupport";
import { GraphQlSupportService } from "./graphQlSupport.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GraphQlSupport)
export class GraphQlSupportResolver extends GraphQlSupportResolverBase {
  constructor(
    protected readonly service: GraphQlSupportService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
