import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VisualProgrammingInterfacesResolverBase } from "./base/visualProgrammingInterfaces.resolver.base";
import { VisualProgrammingInterfaces } from "./base/VisualProgrammingInterfaces";
import { VisualProgrammingInterfacesService } from "./visualProgrammingInterfaces.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VisualProgrammingInterfaces)
export class VisualProgrammingInterfacesResolver extends VisualProgrammingInterfacesResolverBase {
  constructor(
    protected readonly service: VisualProgrammingInterfacesService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
