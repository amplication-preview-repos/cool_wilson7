import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CanaryDeploymentsResolverBase } from "./base/canaryDeployments.resolver.base";
import { CanaryDeployments } from "./base/CanaryDeployments";
import { CanaryDeploymentsService } from "./canaryDeployments.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CanaryDeployments)
export class CanaryDeploymentsResolver extends CanaryDeploymentsResolverBase {
  constructor(
    protected readonly service: CanaryDeploymentsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
