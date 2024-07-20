import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SmartContractDevelopmentResolverBase } from "./base/smartContractDevelopment.resolver.base";
import { SmartContractDevelopment } from "./base/SmartContractDevelopment";
import { SmartContractDevelopmentService } from "./smartContractDevelopment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SmartContractDevelopment)
export class SmartContractDevelopmentResolver extends SmartContractDevelopmentResolverBase {
  constructor(
    protected readonly service: SmartContractDevelopmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
