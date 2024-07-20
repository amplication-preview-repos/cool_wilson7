import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IntegratedKnowledgeBaseResolverBase } from "./base/integratedKnowledgeBase.resolver.base";
import { IntegratedKnowledgeBase } from "./base/IntegratedKnowledgeBase";
import { IntegratedKnowledgeBaseService } from "./integratedKnowledgeBase.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IntegratedKnowledgeBase)
export class IntegratedKnowledgeBaseResolver extends IntegratedKnowledgeBaseResolverBase {
  constructor(
    protected readonly service: IntegratedKnowledgeBaseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
