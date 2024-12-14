import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RealTimeTranslationResolverBase } from "./base/realTimeTranslation.resolver.base";
import { RealTimeTranslation } from "./base/RealTimeTranslation";
import { RealTimeTranslationService } from "./realTimeTranslation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RealTimeTranslation)
export class RealTimeTranslationResolver extends RealTimeTranslationResolverBase {
  constructor(
    protected readonly service: RealTimeTranslationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
