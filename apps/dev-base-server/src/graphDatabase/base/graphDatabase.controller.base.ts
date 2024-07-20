/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { GraphDatabaseService } from "../graphDatabase.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GraphDatabaseCreateInput } from "./GraphDatabaseCreateInput";
import { GraphDatabase } from "./GraphDatabase";
import { GraphDatabaseFindManyArgs } from "./GraphDatabaseFindManyArgs";
import { GraphDatabaseWhereUniqueInput } from "./GraphDatabaseWhereUniqueInput";
import { GraphDatabaseUpdateInput } from "./GraphDatabaseUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GraphDatabaseControllerBase {
  constructor(
    protected readonly service: GraphDatabaseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GraphDatabase })
  @nestAccessControl.UseRoles({
    resource: "GraphDatabase",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GraphDatabaseCreateInput,
  })
  async createGraphDatabase(
    @common.Body() data: GraphDatabaseCreateInput
  ): Promise<GraphDatabase> {
    return await this.service.createGraphDatabase({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [GraphDatabase] })
  @ApiNestedQuery(GraphDatabaseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GraphDatabase",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async graphDatabases(
    @common.Req() request: Request
  ): Promise<GraphDatabase[]> {
    const args = plainToClass(GraphDatabaseFindManyArgs, request.query);
    return this.service.graphDatabases({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: GraphDatabase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GraphDatabase",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async graphDatabase(
    @common.Param() params: GraphDatabaseWhereUniqueInput
  ): Promise<GraphDatabase | null> {
    const result = await this.service.graphDatabase({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: GraphDatabase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GraphDatabase",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GraphDatabaseUpdateInput,
  })
  async updateGraphDatabase(
    @common.Param() params: GraphDatabaseWhereUniqueInput,
    @common.Body() data: GraphDatabaseUpdateInput
  ): Promise<GraphDatabase | null> {
    try {
      return await this.service.updateGraphDatabase({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: GraphDatabase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GraphDatabase",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGraphDatabase(
    @common.Param() params: GraphDatabaseWhereUniqueInput
  ): Promise<GraphDatabase | null> {
    try {
      return await this.service.deleteGraphDatabase({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
