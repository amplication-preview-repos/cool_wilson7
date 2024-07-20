import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PredictiveScalingResolverBase } from "./base/predictiveScaling.resolver.base";
import { PredictiveScaling } from "./base/PredictiveScaling";
import { PredictiveScalingService } from "./predictiveScaling.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PredictiveScaling)
export class PredictiveScalingResolver extends PredictiveScalingResolverBase {
  constructor(
    protected readonly service: PredictiveScalingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
