import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CollaborativeCodingEnvironmentsResolverBase } from "./base/collaborativeCodingEnvironments.resolver.base";
import { CollaborativeCodingEnvironments } from "./base/CollaborativeCodingEnvironments";
import { CollaborativeCodingEnvironmentsService } from "./collaborativeCodingEnvironments.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CollaborativeCodingEnvironments)
export class CollaborativeCodingEnvironmentsResolver extends CollaborativeCodingEnvironmentsResolverBase {
  constructor(
    protected readonly service: CollaborativeCodingEnvironmentsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
