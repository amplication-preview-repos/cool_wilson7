import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RealTimeDatabaseResolverBase } from "./base/realTimeDatabase.resolver.base";
import { RealTimeDatabase } from "./base/RealTimeDatabase";
import { RealTimeDatabaseService } from "./realTimeDatabase.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RealTimeDatabase)
export class RealTimeDatabaseResolver extends RealTimeDatabaseResolverBase {
  constructor(
    protected readonly service: RealTimeDatabaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
