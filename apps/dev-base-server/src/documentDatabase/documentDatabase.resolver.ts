import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DocumentDatabaseResolverBase } from "./base/documentDatabase.resolver.base";
import { DocumentDatabase } from "./base/DocumentDatabase";
import { DocumentDatabaseService } from "./documentDatabase.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DocumentDatabase)
export class DocumentDatabaseResolver extends DocumentDatabaseResolverBase {
  constructor(
    protected readonly service: DocumentDatabaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
