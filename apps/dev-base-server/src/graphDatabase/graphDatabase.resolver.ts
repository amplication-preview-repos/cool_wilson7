import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GraphDatabaseResolverBase } from "./base/graphDatabase.resolver.base";
import { GraphDatabase } from "./base/GraphDatabase";
import { GraphDatabaseService } from "./graphDatabase.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GraphDatabase)
export class GraphDatabaseResolver extends GraphDatabaseResolverBase {
  constructor(
    protected readonly service: GraphDatabaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
