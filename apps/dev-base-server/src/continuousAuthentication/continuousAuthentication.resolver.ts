import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContinuousAuthenticationResolverBase } from "./base/continuousAuthentication.resolver.base";
import { ContinuousAuthentication } from "./base/ContinuousAuthentication";
import { ContinuousAuthenticationService } from "./continuousAuthentication.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContinuousAuthentication)
export class ContinuousAuthenticationResolver extends ContinuousAuthenticationResolverBase {
  constructor(
    protected readonly service: ContinuousAuthenticationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
