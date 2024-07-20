import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PasswordlessAuthenticationResolverBase } from "./base/passwordlessAuthentication.resolver.base";
import { PasswordlessAuthentication } from "./base/PasswordlessAuthentication";
import { PasswordlessAuthenticationService } from "./passwordlessAuthentication.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PasswordlessAuthentication)
export class PasswordlessAuthenticationResolver extends PasswordlessAuthenticationResolverBase {
  constructor(
    protected readonly service: PasswordlessAuthenticationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
