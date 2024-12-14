import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CodeSynchronizationResolverBase } from "./base/codeSynchronization.resolver.base";
import { CodeSynchronization } from "./base/CodeSynchronization";
import { CodeSynchronizationService } from "./codeSynchronization.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CodeSynchronization)
export class CodeSynchronizationResolver extends CodeSynchronizationResolverBase {
  constructor(
    protected readonly service: CodeSynchronizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
