import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CrossPlatformDevelopmentResolverBase } from "./base/crossPlatformDevelopment.resolver.base";
import { CrossPlatformDevelopment } from "./base/CrossPlatformDevelopment";
import { CrossPlatformDevelopmentService } from "./crossPlatformDevelopment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CrossPlatformDevelopment)
export class CrossPlatformDevelopmentResolver extends CrossPlatformDevelopmentResolverBase {
  constructor(
    protected readonly service: CrossPlatformDevelopmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
