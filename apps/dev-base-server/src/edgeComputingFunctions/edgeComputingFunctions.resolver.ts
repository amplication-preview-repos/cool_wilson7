import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EdgeComputingFunctionsResolverBase } from "./base/edgeComputingFunctions.resolver.base";
import { EdgeComputingFunctions } from "./base/EdgeComputingFunctions";
import { EdgeComputingFunctionsService } from "./edgeComputingFunctions.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EdgeComputingFunctions)
export class EdgeComputingFunctionsResolver extends EdgeComputingFunctionsResolverBase {
  constructor(
    protected readonly service: EdgeComputingFunctionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
