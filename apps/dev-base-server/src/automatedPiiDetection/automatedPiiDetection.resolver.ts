import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AutomatedPiiDetectionResolverBase } from "./base/automatedPiiDetection.resolver.base";
import { AutomatedPiiDetection } from "./base/AutomatedPiiDetection";
import { AutomatedPiiDetectionService } from "./automatedPiiDetection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AutomatedPiiDetection)
export class AutomatedPiiDetectionResolver extends AutomatedPiiDetectionResolverBase {
  constructor(
    protected readonly service: AutomatedPiiDetectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
