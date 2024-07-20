import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { DecentralizedStorageResolverBase } from "./base/decentralizedStorage.resolver.base";
import { DecentralizedStorage } from "./base/DecentralizedStorage";
import { DecentralizedStorageService } from "./decentralizedStorage.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => DecentralizedStorage)
export class DecentralizedStorageResolver extends DecentralizedStorageResolverBase {
  constructor(
    protected readonly service: DecentralizedStorageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
