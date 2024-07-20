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
import { PredictiveAnalyticsService } from "../predictiveAnalytics.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PredictiveAnalyticsCreateInput } from "./PredictiveAnalyticsCreateInput";
import { PredictiveAnalytics } from "./PredictiveAnalytics";
import { PredictiveAnalyticsFindManyArgs } from "./PredictiveAnalyticsFindManyArgs";
import { PredictiveAnalyticsWhereUniqueInput } from "./PredictiveAnalyticsWhereUniqueInput";
import { PredictiveAnalyticsUpdateInput } from "./PredictiveAnalyticsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PredictiveAnalyticsControllerBase {
  constructor(
    protected readonly service: PredictiveAnalyticsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PredictiveAnalytics })
  @nestAccessControl.UseRoles({
    resource: "PredictiveAnalytics",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPredictiveAnalytics(
    @common.Body() data: PredictiveAnalyticsCreateInput
  ): Promise<PredictiveAnalytics> {
    return await this.service.createPredictiveAnalytics({
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
  @swagger.ApiOkResponse({ type: [PredictiveAnalytics] })
  @ApiNestedQuery(PredictiveAnalyticsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PredictiveAnalytics",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async predictiveAnalyticsItems(
    @common.Req() request: Request
  ): Promise<PredictiveAnalytics[]> {
    const args = plainToClass(PredictiveAnalyticsFindManyArgs, request.query);
    return this.service.predictiveAnalyticsItems({
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
  @swagger.ApiOkResponse({ type: PredictiveAnalytics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PredictiveAnalytics",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async predictiveAnalytics(
    @common.Param() params: PredictiveAnalyticsWhereUniqueInput
  ): Promise<PredictiveAnalytics | null> {
    const result = await this.service.predictiveAnalytics({
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
  @swagger.ApiOkResponse({ type: PredictiveAnalytics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PredictiveAnalytics",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePredictiveAnalytics(
    @common.Param() params: PredictiveAnalyticsWhereUniqueInput,
    @common.Body() data: PredictiveAnalyticsUpdateInput
  ): Promise<PredictiveAnalytics | null> {
    try {
      return await this.service.updatePredictiveAnalytics({
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
  @swagger.ApiOkResponse({ type: PredictiveAnalytics })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PredictiveAnalytics",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePredictiveAnalytics(
    @common.Param() params: PredictiveAnalyticsWhereUniqueInput
  ): Promise<PredictiveAnalytics | null> {
    try {
      return await this.service.deletePredictiveAnalytics({
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
