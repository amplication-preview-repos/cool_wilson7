import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ContinuousLearningResolverBase } from "./base/continuousLearning.resolver.base";
import { ContinuousLearning } from "./base/ContinuousLearning";
import { ContinuousLearningService } from "./continuousLearning.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ContinuousLearning)
export class ContinuousLearningResolver extends ContinuousLearningResolverBase {
  constructor(
    protected readonly service: ContinuousLearningService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
