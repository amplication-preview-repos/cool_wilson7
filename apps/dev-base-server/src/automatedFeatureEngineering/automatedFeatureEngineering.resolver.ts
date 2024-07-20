import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AutomatedFeatureEngineeringResolverBase } from "./base/automatedFeatureEngineering.resolver.base";
import { AutomatedFeatureEngineering } from "./base/AutomatedFeatureEngineering";
import { AutomatedFeatureEngineeringService } from "./automatedFeatureEngineering.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AutomatedFeatureEngineering)
export class AutomatedFeatureEngineeringResolver extends AutomatedFeatureEngineeringResolverBase {
  constructor(
    protected readonly service: AutomatedFeatureEngineeringService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
