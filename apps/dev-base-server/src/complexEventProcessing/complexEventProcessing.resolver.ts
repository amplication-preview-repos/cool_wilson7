import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ComplexEventProcessingResolverBase } from "./base/complexEventProcessing.resolver.base";
import { ComplexEventProcessing } from "./base/ComplexEventProcessing";
import { ComplexEventProcessingService } from "./complexEventProcessing.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ComplexEventProcessing)
export class ComplexEventProcessingResolver extends ComplexEventProcessingResolverBase {
  constructor(
    protected readonly service: ComplexEventProcessingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
