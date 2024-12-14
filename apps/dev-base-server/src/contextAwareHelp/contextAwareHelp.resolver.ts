import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContextAwareHelpResolverBase } from "./base/contextAwareHelp.resolver.base";
import { ContextAwareHelp } from "./base/ContextAwareHelp";
import { ContextAwareHelpService } from "./contextAwareHelp.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContextAwareHelp)
export class ContextAwareHelpResolver extends ContextAwareHelpResolverBase {
  constructor(
    protected readonly service: ContextAwareHelpService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
