import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AiCodeAssistanceResolverBase } from "./base/aiCodeAssistance.resolver.base";
import { AiCodeAssistance } from "./base/AiCodeAssistance";
import { AiCodeAssistanceService } from "./aiCodeAssistance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AiCodeAssistance)
export class AiCodeAssistanceResolver extends AiCodeAssistanceResolverBase {
  constructor(
    protected readonly service: AiCodeAssistanceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
