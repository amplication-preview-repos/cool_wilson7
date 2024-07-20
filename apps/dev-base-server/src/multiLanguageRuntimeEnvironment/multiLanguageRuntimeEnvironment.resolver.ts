import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MultiLanguageRuntimeEnvironmentResolverBase } from "./base/multiLanguageRuntimeEnvironment.resolver.base";
import { MultiLanguageRuntimeEnvironment } from "./base/MultiLanguageRuntimeEnvironment";
import { MultiLanguageRuntimeEnvironmentService } from "./multiLanguageRuntimeEnvironment.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MultiLanguageRuntimeEnvironment)
export class MultiLanguageRuntimeEnvironmentResolver extends MultiLanguageRuntimeEnvironmentResolverBase {
  constructor(
    protected readonly service: MultiLanguageRuntimeEnvironmentService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
