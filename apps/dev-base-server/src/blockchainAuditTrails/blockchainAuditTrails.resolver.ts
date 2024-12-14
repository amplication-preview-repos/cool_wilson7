import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BlockchainAuditTrailsResolverBase } from "./base/blockchainAuditTrails.resolver.base";
import { BlockchainAuditTrails } from "./base/BlockchainAuditTrails";
import { BlockchainAuditTrailsService } from "./blockchainAuditTrails.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BlockchainAuditTrails)
export class BlockchainAuditTrailsResolver extends BlockchainAuditTrailsResolverBase {
  constructor(
    protected readonly service: BlockchainAuditTrailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
