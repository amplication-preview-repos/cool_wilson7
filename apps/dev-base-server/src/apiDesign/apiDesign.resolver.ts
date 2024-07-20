import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ApiDesignResolverBase } from "./base/apiDesign.resolver.base";
import { ApiDesign } from "./base/ApiDesign";
import { ApiDesignService } from "./apiDesign.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ApiDesign)
export class ApiDesignResolver extends ApiDesignResolverBase {
  constructor(
    protected readonly service: ApiDesignService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
