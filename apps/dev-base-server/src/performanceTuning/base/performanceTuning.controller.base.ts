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
import { PerformanceTuningService } from "../performanceTuning.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PerformanceTuningCreateInput } from "./PerformanceTuningCreateInput";
import { PerformanceTuning } from "./PerformanceTuning";
import { PerformanceTuningFindManyArgs } from "./PerformanceTuningFindManyArgs";
import { PerformanceTuningWhereUniqueInput } from "./PerformanceTuningWhereUniqueInput";
import { PerformanceTuningUpdateInput } from "./PerformanceTuningUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PerformanceTuningControllerBase {
  constructor(
    protected readonly service: PerformanceTuningService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PerformanceTuning })
  @nestAccessControl.UseRoles({
    resource: "PerformanceTuning",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PerformanceTuningCreateInput,
  })
  async createPerformanceTuning(
    @common.Body() data: PerformanceTuningCreateInput
  ): Promise<PerformanceTuning> {
    return await this.service.createPerformanceTuning({
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
  @swagger.ApiOkResponse({ type: [PerformanceTuning] })
  @ApiNestedQuery(PerformanceTuningFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PerformanceTuning",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async performanceTunings(
    @common.Req() request: Request
  ): Promise<PerformanceTuning[]> {
    const args = plainToClass(PerformanceTuningFindManyArgs, request.query);
    return this.service.performanceTunings({
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
  @swagger.ApiOkResponse({ type: PerformanceTuning })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PerformanceTuning",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async performanceTuning(
    @common.Param() params: PerformanceTuningWhereUniqueInput
  ): Promise<PerformanceTuning | null> {
    const result = await this.service.performanceTuning({
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
  @swagger.ApiOkResponse({ type: PerformanceTuning })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PerformanceTuning",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PerformanceTuningUpdateInput,
  })
  async updatePerformanceTuning(
    @common.Param() params: PerformanceTuningWhereUniqueInput,
    @common.Body() data: PerformanceTuningUpdateInput
  ): Promise<PerformanceTuning | null> {
    try {
      return await this.service.updatePerformanceTuning({
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
  @swagger.ApiOkResponse({ type: PerformanceTuning })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PerformanceTuning",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePerformanceTuning(
    @common.Param() params: PerformanceTuningWhereUniqueInput
  ): Promise<PerformanceTuning | null> {
    try {
      return await this.service.deletePerformanceTuning({
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
