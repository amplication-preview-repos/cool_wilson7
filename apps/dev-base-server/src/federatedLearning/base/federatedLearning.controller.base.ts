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
import { FederatedLearningService } from "../federatedLearning.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FederatedLearningCreateInput } from "./FederatedLearningCreateInput";
import { FederatedLearning } from "./FederatedLearning";
import { FederatedLearningFindManyArgs } from "./FederatedLearningFindManyArgs";
import { FederatedLearningWhereUniqueInput } from "./FederatedLearningWhereUniqueInput";
import { FederatedLearningUpdateInput } from "./FederatedLearningUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FederatedLearningControllerBase {
  constructor(
    protected readonly service: FederatedLearningService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FederatedLearning })
  @nestAccessControl.UseRoles({
    resource: "FederatedLearning",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: FederatedLearningCreateInput,
  })
  async createFederatedLearning(
    @common.Body() data: FederatedLearningCreateInput
  ): Promise<FederatedLearning> {
    return await this.service.createFederatedLearning({
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
  @swagger.ApiOkResponse({ type: [FederatedLearning] })
  @ApiNestedQuery(FederatedLearningFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FederatedLearning",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async federatedLearnings(
    @common.Req() request: Request
  ): Promise<FederatedLearning[]> {
    const args = plainToClass(FederatedLearningFindManyArgs, request.query);
    return this.service.federatedLearnings({
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
  @swagger.ApiOkResponse({ type: FederatedLearning })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FederatedLearning",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async federatedLearning(
    @common.Param() params: FederatedLearningWhereUniqueInput
  ): Promise<FederatedLearning | null> {
    const result = await this.service.federatedLearning({
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
  @swagger.ApiOkResponse({ type: FederatedLearning })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FederatedLearning",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: FederatedLearningUpdateInput,
  })
  async updateFederatedLearning(
    @common.Param() params: FederatedLearningWhereUniqueInput,
    @common.Body() data: FederatedLearningUpdateInput
  ): Promise<FederatedLearning | null> {
    try {
      return await this.service.updateFederatedLearning({
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
  @swagger.ApiOkResponse({ type: FederatedLearning })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FederatedLearning",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFederatedLearning(
    @common.Param() params: FederatedLearningWhereUniqueInput
  ): Promise<FederatedLearning | null> {
    try {
      return await this.service.deleteFederatedLearning({
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
