import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserBehaviorModelingResolverBase } from "./base/userBehaviorModeling.resolver.base";
import { UserBehaviorModeling } from "./base/UserBehaviorModeling";
import { UserBehaviorModelingService } from "./userBehaviorModeling.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserBehaviorModeling)
export class UserBehaviorModelingResolver extends UserBehaviorModelingResolverBase {
  constructor(
    protected readonly service: UserBehaviorModelingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
