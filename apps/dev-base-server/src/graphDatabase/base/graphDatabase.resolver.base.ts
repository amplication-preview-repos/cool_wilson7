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
import { GraphDatabase } from "./GraphDatabase";
import { GraphDatabaseCountArgs } from "./GraphDatabaseCountArgs";
import { GraphDatabaseFindManyArgs } from "./GraphDatabaseFindManyArgs";
import { GraphDatabaseFindUniqueArgs } from "./GraphDatabaseFindUniqueArgs";
import { DeleteGraphDatabaseArgs } from "./DeleteGraphDatabaseArgs";
import { GraphDatabaseService } from "../graphDatabase.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => GraphDatabase)
export class GraphDatabaseResolverBase {
  constructor(
    protected readonly service: GraphDatabaseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "GraphDatabase",
    action: "read",
    possession: "any",
  })
  async _graphDatabasesMeta(
    @graphql.Args() args: GraphDatabaseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [GraphDatabase])
  @nestAccessControl.UseRoles({
    resource: "GraphDatabase",
    action: "read",
    possession: "any",
  })
  async graphDatabases(
    @graphql.Args() args: GraphDatabaseFindManyArgs
  ): Promise<GraphDatabase[]> {
    return this.service.graphDatabases(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => GraphDatabase, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "GraphDatabase",
    action: "read",
    possession: "own",
  })
  async graphDatabase(
    @graphql.Args() args: GraphDatabaseFindUniqueArgs
  ): Promise<GraphDatabase | null> {
    const result = await this.service.graphDatabase(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => GraphDatabase)
  @nestAccessControl.UseRoles({
    resource: "GraphDatabase",
    action: "delete",
    possession: "any",
  })
  async deleteGraphDatabase(
    @graphql.Args() args: DeleteGraphDatabaseArgs
  ): Promise<GraphDatabase | null> {
    try {
      return await this.service.deleteGraphDatabase(args);
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
