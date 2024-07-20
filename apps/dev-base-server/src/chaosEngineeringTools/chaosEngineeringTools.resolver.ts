import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ChaosEngineeringToolsResolverBase } from "./base/chaosEngineeringTools.resolver.base";
import { ChaosEngineeringTools } from "./base/ChaosEngineeringTools";
import { ChaosEngineeringToolsService } from "./chaosEngineeringTools.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ChaosEngineeringTools)
export class ChaosEngineeringToolsResolver extends ChaosEngineeringToolsResolverBase {
  constructor(
    protected readonly service: ChaosEngineeringToolsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
