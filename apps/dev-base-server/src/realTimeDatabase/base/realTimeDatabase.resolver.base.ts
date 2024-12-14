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
import { RealTimeDatabase } from "./RealTimeDatabase";
import { RealTimeDatabaseCountArgs } from "./RealTimeDatabaseCountArgs";
import { RealTimeDatabaseFindManyArgs } from "./RealTimeDatabaseFindManyArgs";
import { RealTimeDatabaseFindUniqueArgs } from "./RealTimeDatabaseFindUniqueArgs";
import { DeleteRealTimeDatabaseArgs } from "./DeleteRealTimeDatabaseArgs";
import { RealTimeDatabaseService } from "../realTimeDatabase.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RealTimeDatabase)
export class RealTimeDatabaseResolverBase {
  constructor(
    protected readonly service: RealTimeDatabaseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "RealTimeDatabase",
    action: "read",
    possession: "any",
  })
  async _realTimeDatabasesMeta(
    @graphql.Args() args: RealTimeDatabaseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [RealTimeDatabase])
  @nestAccessControl.UseRoles({
    resource: "RealTimeDatabase",
    action: "read",
    possession: "any",
  })
  async realTimeDatabases(
    @graphql.Args() args: RealTimeDatabaseFindManyArgs
  ): Promise<RealTimeDatabase[]> {
    return this.service.realTimeDatabases(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => RealTimeDatabase, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "RealTimeDatabase",
    action: "read",
    possession: "own",
  })
  async realTimeDatabase(
    @graphql.Args() args: RealTimeDatabaseFindUniqueArgs
  ): Promise<RealTimeDatabase | null> {
    const result = await this.service.realTimeDatabase(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => RealTimeDatabase)
  @nestAccessControl.UseRoles({
    resource: "RealTimeDatabase",
    action: "delete",
    possession: "any",
  })
  async deleteRealTimeDatabase(
    @graphql.Args() args: DeleteRealTimeDatabaseArgs
  ): Promise<RealTimeDatabase | null> {
    try {
      return await this.service.deleteRealTimeDatabase(args);
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
