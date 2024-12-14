import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GitOpsWorkflowResolverBase } from "./base/gitOpsWorkflow.resolver.base";
import { GitOpsWorkflow } from "./base/GitOpsWorkflow";
import { GitOpsWorkflowService } from "./gitOpsWorkflow.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GitOpsWorkflow)
export class GitOpsWorkflowResolver extends GitOpsWorkflowResolverBase {
  constructor(
    protected readonly service: GitOpsWorkflowService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
