import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AutomatedEtlPipelinesResolverBase } from "./base/automatedEtlPipelines.resolver.base";
import { AutomatedEtlPipelines } from "./base/AutomatedEtlPipelines";
import { AutomatedEtlPipelinesService } from "./automatedEtlPipelines.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AutomatedEtlPipelines)
export class AutomatedEtlPipelinesResolver extends AutomatedEtlPipelinesResolverBase {
  constructor(
    protected readonly service: AutomatedEtlPipelinesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
