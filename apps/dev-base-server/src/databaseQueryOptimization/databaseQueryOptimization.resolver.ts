import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DatabaseQueryOptimizationResolverBase } from "./base/databaseQueryOptimization.resolver.base";
import { DatabaseQueryOptimization } from "./base/DatabaseQueryOptimization";
import { DatabaseQueryOptimizationService } from "./databaseQueryOptimization.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DatabaseQueryOptimization)
export class DatabaseQueryOptimizationResolver extends DatabaseQueryOptimizationResolverBase {
  constructor(
    protected readonly service: DatabaseQueryOptimizationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
