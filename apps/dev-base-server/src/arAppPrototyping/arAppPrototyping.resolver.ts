import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ArAppPrototypingResolverBase } from "./base/arAppPrototyping.resolver.base";
import { ArAppPrototyping } from "./base/ArAppPrototyping";
import { ArAppPrototypingService } from "./arAppPrototyping.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ArAppPrototyping)
export class ArAppPrototypingResolver extends ArAppPrototypingResolverBase {
  constructor(
    protected readonly service: ArAppPrototypingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
