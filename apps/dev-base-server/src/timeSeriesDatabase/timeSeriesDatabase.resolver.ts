import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TimeSeriesDatabaseResolverBase } from "./base/timeSeriesDatabase.resolver.base";
import { TimeSeriesDatabase } from "./base/TimeSeriesDatabase";
import { TimeSeriesDatabaseService } from "./timeSeriesDatabase.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TimeSeriesDatabase)
export class TimeSeriesDatabaseResolver extends TimeSeriesDatabaseResolverBase {
  constructor(
    protected readonly service: TimeSeriesDatabaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
