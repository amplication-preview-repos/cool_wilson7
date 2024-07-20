import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EnergyEfficientCodingResolverBase } from "./base/energyEfficientCoding.resolver.base";
import { EnergyEfficientCoding } from "./base/EnergyEfficientCoding";
import { EnergyEfficientCodingService } from "./energyEfficientCoding.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EnergyEfficientCoding)
export class EnergyEfficientCodingResolver extends EnergyEfficientCodingResolverBase {
  constructor(
    protected readonly service: EnergyEfficientCodingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
