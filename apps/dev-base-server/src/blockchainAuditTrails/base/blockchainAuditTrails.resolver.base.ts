/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BlockchainAuditTrails } from "./BlockchainAuditTrails";
import { BlockchainAuditTrailsCountArgs } from "./BlockchainAuditTrailsCountArgs";
import { BlockchainAuditTrailsFindManyArgs } from "./BlockchainAuditTrailsFindManyArgs";
import { BlockchainAuditTrailsFindUniqueArgs } from "./BlockchainAuditTrailsFindUniqueArgs";
import { DeleteBlockchainAuditTrailsArgs } from "./DeleteBlockchainAuditTrailsArgs";
import { BlockchainAuditTrailsService } from "../blockchainAuditTrails.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BlockchainAuditTrails)
export class BlockchainAuditTrailsResolverBase {
  constructor(
    protected readonly service: BlockchainAuditTrailsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BlockchainAuditTrails",
    action: "read",
    possession: "any",
  })
  async _blockchainAuditTrailsItemsMeta(
    @graphql.Args() args: BlockchainAuditTrailsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BlockchainAuditTrails])
  @nestAccessControl.UseRoles({
    resource: "BlockchainAuditTrails",
    action: "read",
    possession: "any",
  })
  async blockchainAuditTrailsItems(
    @graphql.Args() args: BlockchainAuditTrailsFindManyArgs
  ): Promise<BlockchainAuditTrails[]> {
    return this.service.blockchainAuditTrailsItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BlockchainAuditTrails, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BlockchainAuditTrails",
    action: "read",
    possession: "own",
  })
  async blockchainAuditTrails(
    @graphql.Args() args: BlockchainAuditTrailsFindUniqueArgs
  ): Promise<BlockchainAuditTrails | null> {
    const result = await this.service.blockchainAuditTrails(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BlockchainAuditTrails)
  @nestAccessControl.UseRoles({
    resource: "BlockchainAuditTrails",
    action: "delete",
    possession: "any",
  })
  async deleteBlockchainAuditTrails(
    @graphql.Args() args: DeleteBlockchainAuditTrailsArgs
  ): Promise<BlockchainAuditTrails | null> {
    try {
      return await this.service.deleteBlockchainAuditTrails(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
