import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PlatformSpecificOptimizationsResolverBase } from "./base/platformSpecificOptimizations.resolver.base";
import { PlatformSpecificOptimizations } from "./base/PlatformSpecificOptimizations";
import { PlatformSpecificOptimizationsService } from "./platformSpecificOptimizations.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PlatformSpecificOptimizations)
export class PlatformSpecificOptimizationsResolver extends PlatformSpecificOptimizationsResolverBase {
  constructor(
    protected readonly service: PlatformSpecificOptimizationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
