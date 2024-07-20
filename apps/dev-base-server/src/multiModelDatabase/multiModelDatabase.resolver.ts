import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MultiModelDatabaseResolverBase } from "./base/multiModelDatabase.resolver.base";
import { MultiModelDatabase } from "./base/MultiModelDatabase";
import { MultiModelDatabaseService } from "./multiModelDatabase.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MultiModelDatabase)
export class MultiModelDatabaseResolver extends MultiModelDatabaseResolverBase {
  constructor(
    protected readonly service: MultiModelDatabaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
