import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PredictiveAnalyticsResolverBase } from "./base/predictiveAnalytics.resolver.base";
import { PredictiveAnalytics } from "./base/PredictiveAnalytics";
import { PredictiveAnalyticsService } from "./predictiveAnalytics.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PredictiveAnalytics)
export class PredictiveAnalyticsResolver extends PredictiveAnalyticsResolverBase {
  constructor(
    protected readonly service: PredictiveAnalyticsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
