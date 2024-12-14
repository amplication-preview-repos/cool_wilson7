import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AIassistedPairProgrammingResolverBase } from "./base/aIassistedPairProgramming.resolver.base";
import { AIassistedPairProgramming } from "./base/AIassistedPairProgramming";
import { AIassistedPairProgrammingService } from "./aIassistedPairProgramming.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AIassistedPairProgramming)
export class AIassistedPairProgrammingResolver extends AIassistedPairProgrammingResolverBase {
  constructor(
    protected readonly service: AIassistedPairProgrammingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
