import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StatefulServerlessResolverBase } from "./base/statefulServerless.resolver.base";
import { StatefulServerless } from "./base/StatefulServerless";
import { StatefulServerlessService } from "./statefulServerless.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => StatefulServerless)
export class StatefulServerlessResolver extends StatefulServerlessResolverBase {
  constructor(
    protected readonly service: StatefulServerlessService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
