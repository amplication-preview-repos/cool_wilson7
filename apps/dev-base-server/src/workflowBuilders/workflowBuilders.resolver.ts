import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { WorkflowBuildersResolverBase } from "./base/workflowBuilders.resolver.base";
import { WorkflowBuilders } from "./base/WorkflowBuilders";
import { WorkflowBuildersService } from "./workflowBuilders.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => WorkflowBuilders)
export class WorkflowBuildersResolver extends WorkflowBuildersResolverBase {
  constructor(
    protected readonly service: WorkflowBuildersService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
