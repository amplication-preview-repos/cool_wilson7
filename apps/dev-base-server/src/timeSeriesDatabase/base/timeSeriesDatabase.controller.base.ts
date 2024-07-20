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
import { TimeSeriesDatabaseService } from "../timeSeriesDatabase.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TimeSeriesDatabaseCreateInput } from "./TimeSeriesDatabaseCreateInput";
import { TimeSeriesDatabase } from "./TimeSeriesDatabase";
import { TimeSeriesDatabaseFindManyArgs } from "./TimeSeriesDatabaseFindManyArgs";
import { TimeSeriesDatabaseWhereUniqueInput } from "./TimeSeriesDatabaseWhereUniqueInput";
import { TimeSeriesDatabaseUpdateInput } from "./TimeSeriesDatabaseUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TimeSeriesDatabaseControllerBase {
  constructor(
    protected readonly service: TimeSeriesDatabaseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: TimeSeriesDatabase })
  @nestAccessControl.UseRoles({
    resource: "TimeSeriesDatabase",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createTimeSeriesDatabase(
    @common.Body() data: TimeSeriesDatabaseCreateInput
  ): Promise<TimeSeriesDatabase> {
    return await this.service.createTimeSeriesDatabase({
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
  @swagger.ApiOkResponse({ type: [TimeSeriesDatabase] })
  @ApiNestedQuery(TimeSeriesDatabaseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "TimeSeriesDatabase",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async timeSeriesDatabases(
    @common.Req() request: Request
  ): Promise<TimeSeriesDatabase[]> {
    const args = plainToClass(TimeSeriesDatabaseFindManyArgs, request.query);
    return this.service.timeSeriesDatabases({
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
  @swagger.ApiOkResponse({ type: TimeSeriesDatabase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TimeSeriesDatabase",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async timeSeriesDatabase(
    @common.Param() params: TimeSeriesDatabaseWhereUniqueInput
  ): Promise<TimeSeriesDatabase | null> {
    const result = await this.service.timeSeriesDatabase({
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
  @swagger.ApiOkResponse({ type: TimeSeriesDatabase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TimeSeriesDatabase",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateTimeSeriesDatabase(
    @common.Param() params: TimeSeriesDatabaseWhereUniqueInput,
    @common.Body() data: TimeSeriesDatabaseUpdateInput
  ): Promise<TimeSeriesDatabase | null> {
    try {
      return await this.service.updateTimeSeriesDatabase({
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
  @swagger.ApiOkResponse({ type: TimeSeriesDatabase })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "TimeSeriesDatabase",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteTimeSeriesDatabase(
    @common.Param() params: TimeSeriesDatabaseWhereUniqueInput
  ): Promise<TimeSeriesDatabase | null> {
    try {
      return await this.service.deleteTimeSeriesDatabase({
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
