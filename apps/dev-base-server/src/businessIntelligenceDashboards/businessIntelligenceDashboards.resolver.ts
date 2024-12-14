import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BusinessIntelligenceDashboardsResolverBase } from "./base/businessIntelligenceDashboards.resolver.base";
import { BusinessIntelligenceDashboards } from "./base/BusinessIntelligenceDashboards";
import { BusinessIntelligenceDashboardsService } from "./businessIntelligenceDashboards.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BusinessIntelligenceDashboards)
export class BusinessIntelligenceDashboardsResolver extends BusinessIntelligenceDashboardsResolverBase {
  constructor(
    protected readonly service: BusinessIntelligenceDashboardsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
