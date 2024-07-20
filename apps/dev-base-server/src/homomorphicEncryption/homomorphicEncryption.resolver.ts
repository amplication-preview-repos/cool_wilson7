import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HomomorphicEncryptionResolverBase } from "./base/homomorphicEncryption.resolver.base";
import { HomomorphicEncryption } from "./base/HomomorphicEncryption";
import { HomomorphicEncryptionService } from "./homomorphicEncryption.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HomomorphicEncryption)
export class HomomorphicEncryptionResolver extends HomomorphicEncryptionResolverBase {
  constructor(
    protected readonly service: HomomorphicEncryptionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
