import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AiDrivenIncidentResponseResolverBase } from "./base/aiDrivenIncidentResponse.resolver.base";
import { AiDrivenIncidentResponse } from "./base/AiDrivenIncidentResponse";
import { AiDrivenIncidentResponseService } from "./aiDrivenIncidentResponse.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AiDrivenIncidentResponse)
export class AiDrivenIncidentResponseResolver extends AiDrivenIncidentResponseResolverBase {
  constructor(
    protected readonly service: AiDrivenIncidentResponseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
