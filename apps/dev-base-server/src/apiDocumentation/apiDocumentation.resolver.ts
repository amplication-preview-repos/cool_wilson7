import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApiDocumentationResolverBase } from "./base/apiDocumentation.resolver.base";
import { ApiDocumentation } from "./base/ApiDocumentation";
import { ApiDocumentationService } from "./apiDocumentation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApiDocumentation)
export class ApiDocumentationResolver extends ApiDocumentationResolverBase {
  constructor(
    protected readonly service: ApiDocumentationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
