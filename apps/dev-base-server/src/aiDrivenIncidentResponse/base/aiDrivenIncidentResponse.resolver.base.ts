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
import { AiDrivenIncidentResponse } from "./AiDrivenIncidentResponse";
import { AiDrivenIncidentResponseCountArgs } from "./AiDrivenIncidentResponseCountArgs";
import { AiDrivenIncidentResponseFindManyArgs } from "./AiDrivenIncidentResponseFindManyArgs";
import { AiDrivenIncidentResponseFindUniqueArgs } from "./AiDrivenIncidentResponseFindUniqueArgs";
import { DeleteAiDrivenIncidentResponseArgs } from "./DeleteAiDrivenIncidentResponseArgs";
import { AiDrivenIncidentResponseService } from "../aiDrivenIncidentResponse.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AiDrivenIncidentResponse)
export class AiDrivenIncidentResponseResolverBase {
  constructor(
    protected readonly service: AiDrivenIncidentResponseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "AiDrivenIncidentResponse",
    action: "read",
    possession: "any",
  })
  async _aiDrivenIncidentResponsesMeta(
    @graphql.Args() args: AiDrivenIncidentResponseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [AiDrivenIncidentResponse])
  @nestAccessControl.UseRoles({
    resource: "AiDrivenIncidentResponse",
    action: "read",
    possession: "any",
  })
  async aiDrivenIncidentResponses(
    @graphql.Args() args: AiDrivenIncidentResponseFindManyArgs
  ): Promise<AiDrivenIncidentResponse[]> {
    return this.service.aiDrivenIncidentResponses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => AiDrivenIncidentResponse, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "AiDrivenIncidentResponse",
    action: "read",
    possession: "own",
  })
  async aiDrivenIncidentResponse(
    @graphql.Args() args: AiDrivenIncidentResponseFindUniqueArgs
  ): Promise<AiDrivenIncidentResponse | null> {
    const result = await this.service.aiDrivenIncidentResponse(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AiDrivenIncidentResponse)
  @nestAccessControl.UseRoles({
    resource: "AiDrivenIncidentResponse",
    action: "delete",
    possession: "any",
  })
  async deleteAiDrivenIncidentResponse(
    @graphql.Args() args: DeleteAiDrivenIncidentResponseArgs
  ): Promise<AiDrivenIncidentResponse | null> {
    try {
      return await this.service.deleteAiDrivenIncidentResponse(args);
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
