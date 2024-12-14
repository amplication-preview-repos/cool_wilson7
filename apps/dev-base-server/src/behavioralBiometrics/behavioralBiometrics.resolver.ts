import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BehavioralBiometricsResolverBase } from "./base/behavioralBiometrics.resolver.base";
import { BehavioralBiometrics } from "./base/BehavioralBiometrics";
import { BehavioralBiometricsService } from "./behavioralBiometrics.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BehavioralBiometrics)
export class BehavioralBiometricsResolver extends BehavioralBiometricsResolverBase {
  constructor(
    protected readonly service: BehavioralBiometricsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
