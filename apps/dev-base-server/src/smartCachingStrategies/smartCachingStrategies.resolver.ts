import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SmartCachingStrategiesResolverBase } from "./base/smartCachingStrategies.resolver.base";
import { SmartCachingStrategies } from "./base/SmartCachingStrategies";
import { SmartCachingStrategiesService } from "./smartCachingStrategies.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SmartCachingStrategies)
export class SmartCachingStrategiesResolver extends SmartCachingStrategiesResolverBase {
  constructor(
    protected readonly service: SmartCachingStrategiesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
