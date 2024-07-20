import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GamificationElementsResolverBase } from "./base/gamificationElements.resolver.base";
import { GamificationElements } from "./base/GamificationElements";
import { GamificationElementsService } from "./gamificationElements.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GamificationElements)
export class GamificationElementsResolver extends GamificationElementsResolverBase {
  constructor(
    protected readonly service: GamificationElementsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
