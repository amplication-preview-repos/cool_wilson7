import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EdgeAnalyticsResolverBase } from "./base/edgeAnalytics.resolver.base";
import { EdgeAnalytics } from "./base/EdgeAnalytics";
import { EdgeAnalyticsService } from "./edgeAnalytics.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EdgeAnalytics)
export class EdgeAnalyticsResolver extends EdgeAnalyticsResolverBase {
  constructor(
    protected readonly service: EdgeAnalyticsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
