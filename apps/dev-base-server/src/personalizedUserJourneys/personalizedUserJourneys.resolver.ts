import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PersonalizedUserJourneysResolverBase } from "./base/personalizedUserJourneys.resolver.base";
import { PersonalizedUserJourneys } from "./base/PersonalizedUserJourneys";
import { PersonalizedUserJourneysService } from "./personalizedUserJourneys.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PersonalizedUserJourneys)
export class PersonalizedUserJourneysResolver extends PersonalizedUserJourneysResolverBase {
  constructor(
    protected readonly service: PersonalizedUserJourneysService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
