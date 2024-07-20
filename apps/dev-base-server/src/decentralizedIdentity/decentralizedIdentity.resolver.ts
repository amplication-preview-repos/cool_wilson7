import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DecentralizedIdentityResolverBase } from "./base/decentralizedIdentity.resolver.base";
import { DecentralizedIdentity } from "./base/DecentralizedIdentity";
import { DecentralizedIdentityService } from "./decentralizedIdentity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DecentralizedIdentity)
export class DecentralizedIdentityResolver extends DecentralizedIdentityResolverBase {
  constructor(
    protected readonly service: DecentralizedIdentityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
