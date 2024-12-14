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
import { AutomatedPiiDetection } from "./AutomatedPiiDetection";
import { AutomatedPiiDetectionCountArgs } from "./AutomatedPiiDetectionCountArgs";
import { AutomatedPiiDetectionFindManyArgs } from "./AutomatedPiiDetectionFindManyArgs";
import { AutomatedPiiDetectionFindUniqueArgs } from "./AutomatedPiiDetectionFindUniqueArgs";
import { DeleteAutomatedPiiDetectionArgs } from "./DeleteAutomatedPiiDetectionArgs";
import { AutomatedPiiDetectionService } from "../automatedPiiDetection.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AutomatedPiiDetection)
export class AutomatedPiiDetectionResolverBase {
  constructor(
    protected readonly service: AutomatedPiiDetectionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AutomatedPiiDetection",
    action: "read",
    possession: "any",
  })
  async _automatedPiiDetectionsMeta(
    @graphql.Args() args: AutomatedPiiDetectionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AutomatedPiiDetection])
  @nestAccessControl.UseRoles({
    resource: "AutomatedPiiDetection",
    action: "read",
    possession: "any",
  })
  async automatedPiiDetections(
    @graphql.Args() args: AutomatedPiiDetectionFindManyArgs
  ): Promise<AutomatedPiiDetection[]> {
    return this.service.automatedPiiDetections(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AutomatedPiiDetection, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AutomatedPiiDetection",
    action: "read",
    possession: "own",
  })
  async automatedPiiDetection(
    @graphql.Args() args: AutomatedPiiDetectionFindUniqueArgs
  ): Promise<AutomatedPiiDetection | null> {
    const result = await this.service.automatedPiiDetection(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AutomatedPiiDetection)
  @nestAccessControl.UseRoles({
    resource: "AutomatedPiiDetection",
    action: "delete",
    possession: "any",
  })
  async deleteAutomatedPiiDetection(
    @graphql.Args() args: DeleteAutomatedPiiDetectionArgs
  ): Promise<AutomatedPiiDetection | null> {
    try {
      return await this.service.deleteAutomatedPiiDetection(args);
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
