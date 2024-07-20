import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FederatedLearningResolverBase } from "./base/federatedLearning.resolver.base";
import { FederatedLearning } from "./base/FederatedLearning";
import { FederatedLearningService } from "./federatedLearning.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FederatedLearning)
export class FederatedLearningResolver extends FederatedLearningResolverBase {
  constructor(
    protected readonly service: FederatedLearningService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
