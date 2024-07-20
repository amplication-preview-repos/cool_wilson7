import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DataLineageTrackingResolverBase } from "./base/dataLineageTracking.resolver.base";
import { DataLineageTracking } from "./base/DataLineageTracking";
import { DataLineageTrackingService } from "./dataLineageTracking.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DataLineageTracking)
export class DataLineageTrackingResolver extends DataLineageTrackingResolverBase {
  constructor(
    protected readonly service: DataLineageTrackingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
