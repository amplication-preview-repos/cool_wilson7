import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GreenHostingOptionsResolverBase } from "./base/greenHostingOptions.resolver.base";
import { GreenHostingOptions } from "./base/GreenHostingOptions";
import { GreenHostingOptionsService } from "./greenHostingOptions.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GreenHostingOptions)
export class GreenHostingOptionsResolver extends GreenHostingOptionsResolverBase {
  constructor(
    protected readonly service: GreenHostingOptionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
