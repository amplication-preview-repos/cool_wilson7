import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccessibilityComplianceResolverBase } from "./base/accessibilityCompliance.resolver.base";
import { AccessibilityCompliance } from "./base/AccessibilityCompliance";
import { AccessibilityComplianceService } from "./accessibilityCompliance.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccessibilityCompliance)
export class AccessibilityComplianceResolver extends AccessibilityComplianceResolverBase {
  constructor(
    protected readonly service: AccessibilityComplianceService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
