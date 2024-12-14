import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AdaptiveUiComponentsResolverBase } from "./base/adaptiveUiComponents.resolver.base";
import { AdaptiveUiComponents } from "./base/AdaptiveUiComponents";
import { AdaptiveUiComponentsService } from "./adaptiveUiComponents.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AdaptiveUiComponents)
export class AdaptiveUiComponentsResolver extends AdaptiveUiComponentsResolverBase {
  constructor(
    protected readonly service: AdaptiveUiComponentsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
