import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnomalyDetectionResolverBase } from "./base/anomalyDetection.resolver.base";
import { AnomalyDetection } from "./base/AnomalyDetection";
import { AnomalyDetectionService } from "./anomalyDetection.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnomalyDetection)
export class AnomalyDetectionResolver extends AnomalyDetectionResolverBase {
  constructor(
    protected readonly service: AnomalyDetectionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
