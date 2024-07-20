import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ZeroTrustSecurityResolverBase } from "./base/zeroTrustSecurity.resolver.base";
import { ZeroTrustSecurity } from "./base/ZeroTrustSecurity";
import { ZeroTrustSecurityService } from "./zeroTrustSecurity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ZeroTrustSecurity)
export class ZeroTrustSecurityResolver extends ZeroTrustSecurityResolverBase {
  constructor(
    protected readonly service: ZeroTrustSecurityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
