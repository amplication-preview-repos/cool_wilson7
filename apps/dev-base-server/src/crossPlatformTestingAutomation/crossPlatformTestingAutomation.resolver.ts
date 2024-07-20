import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CrossPlatformTestingAutomationResolverBase } from "./base/crossPlatformTestingAutomation.resolver.base";
import { CrossPlatformTestingAutomation } from "./base/CrossPlatformTestingAutomation";
import { CrossPlatformTestingAutomationService } from "./crossPlatformTestingAutomation.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CrossPlatformTestingAutomation)
export class CrossPlatformTestingAutomationResolver extends CrossPlatformTestingAutomationResolverBase {
  constructor(
    protected readonly service: CrossPlatformTestingAutomationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
