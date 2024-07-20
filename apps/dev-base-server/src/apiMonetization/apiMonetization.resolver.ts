import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApiMonetizationResolverBase } from "./base/apiMonetization.resolver.base";
import { ApiMonetization } from "./base/ApiMonetization";
import { ApiMonetizationService } from "./apiMonetization.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApiMonetization)
export class ApiMonetizationResolver extends ApiMonetizationResolverBase {
  constructor(
    protected readonly service: ApiMonetizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
