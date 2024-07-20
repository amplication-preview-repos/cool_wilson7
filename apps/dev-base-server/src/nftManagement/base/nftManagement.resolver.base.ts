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
import { NftManagement } from "./NftManagement";
import { NftManagementCountArgs } from "./NftManagementCountArgs";
import { NftManagementFindManyArgs } from "./NftManagementFindManyArgs";
import { NftManagementFindUniqueArgs } from "./NftManagementFindUniqueArgs";
import { DeleteNftManagementArgs } from "./DeleteNftManagementArgs";
import { NftManagementService } from "../nftManagement.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NftManagement)
export class NftManagementResolverBase {
  constructor(
    protected readonly service: NftManagementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "NftManagement",
    action: "read",
    possession: "any",
  })
  async _nftManagementsMeta(
    @graphql.Args() args: NftManagementCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [NftManagement])
  @nestAccessControl.UseRoles({
    resource: "NftManagement",
    action: "read",
    possession: "any",
  })
  async nftManagements(
    @graphql.Args() args: NftManagementFindManyArgs
  ): Promise<NftManagement[]> {
    return this.service.nftManagements(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => NftManagement, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "NftManagement",
    action: "read",
    possession: "own",
  })
  async nftManagement(
    @graphql.Args() args: NftManagementFindUniqueArgs
  ): Promise<NftManagement | null> {
    const result = await this.service.nftManagement(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => NftManagement)
  @nestAccessControl.UseRoles({
    resource: "NftManagement",
    action: "delete",
    possession: "any",
  })
  async deleteNftManagement(
    @graphql.Args() args: DeleteNftManagementArgs
  ): Promise<NftManagement | null> {
    try {
      return await this.service.deleteNftManagement(args);
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
