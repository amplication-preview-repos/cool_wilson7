import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AutomatedThreatDetectionResolverBase } from "./base/automatedThreatDetection.resolver.base";
import { AutomatedThreatDetection } from "./base/AutomatedThreatDetection";
import { AutomatedThreatDetectionService } from "./automatedThreatDetection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AutomatedThreatDetection)
export class AutomatedThreatDetectionResolver extends AutomatedThreatDetectionResolverBase {
  constructor(
    protected readonly service: AutomatedThreatDetectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
