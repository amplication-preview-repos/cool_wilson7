import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CarbonFootprintTrackingResolverBase } from "./base/carbonFootprintTracking.resolver.base";
import { CarbonFootprintTracking } from "./base/CarbonFootprintTracking";
import { CarbonFootprintTrackingService } from "./carbonFootprintTracking.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CarbonFootprintTracking)
export class CarbonFootprintTrackingResolver extends CarbonFootprintTrackingResolverBase {
  constructor(
    protected readonly service: CarbonFootprintTrackingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
