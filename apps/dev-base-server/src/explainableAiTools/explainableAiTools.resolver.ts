import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExplainableAiToolsResolverBase } from "./base/explainableAiTools.resolver.base";
import { ExplainableAiTools } from "./base/ExplainableAiTools";
import { ExplainableAiToolsService } from "./explainableAiTools.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExplainableAiTools)
export class ExplainableAiToolsResolver extends ExplainableAiToolsResolverBase {
  constructor(
    protected readonly service: ExplainableAiToolsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
