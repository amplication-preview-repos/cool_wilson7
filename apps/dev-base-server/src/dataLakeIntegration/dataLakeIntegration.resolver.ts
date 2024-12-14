import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DataLakeIntegrationResolverBase } from "./base/dataLakeIntegration.resolver.base";
import { DataLakeIntegration } from "./base/DataLakeIntegration";
import { DataLakeIntegrationService } from "./dataLakeIntegration.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DataLakeIntegration)
export class DataLakeIntegrationResolver extends DataLakeIntegrationResolverBase {
  constructor(
    protected readonly service: DataLakeIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
