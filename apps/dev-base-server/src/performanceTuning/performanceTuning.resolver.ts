import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PerformanceTuningResolverBase } from "./base/performanceTuning.resolver.base";
import { PerformanceTuning } from "./base/PerformanceTuning";
import { PerformanceTuningService } from "./performanceTuning.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PerformanceTuning)
export class PerformanceTuningResolver extends PerformanceTuningResolverBase {
  constructor(
    protected readonly service: PerformanceTuningService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
