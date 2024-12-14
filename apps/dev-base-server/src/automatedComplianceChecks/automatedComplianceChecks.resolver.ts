import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AutomatedComplianceChecksResolverBase } from "./base/automatedComplianceChecks.resolver.base";
import { AutomatedComplianceChecks } from "./base/AutomatedComplianceChecks";
import { AutomatedComplianceChecksService } from "./automatedComplianceChecks.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AutomatedComplianceChecks)
export class AutomatedComplianceChecksResolver extends AutomatedComplianceChecksResolverBase {
  constructor(
    protected readonly service: AutomatedComplianceChecksService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
