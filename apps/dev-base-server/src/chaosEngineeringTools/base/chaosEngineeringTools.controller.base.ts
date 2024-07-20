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
import { ChaosEngineeringToolsService } from "../chaosEngineeringTools.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ChaosEngineeringToolsCreateInput } from "./ChaosEngineeringToolsCreateInput";
import { ChaosEngineeringTools } from "./ChaosEngineeringTools";
import { ChaosEngineeringToolsFindManyArgs } from "./ChaosEngineeringToolsFindManyArgs";
import { ChaosEngineeringToolsWhereUniqueInput } from "./ChaosEngineeringToolsWhereUniqueInput";
import { ChaosEngineeringToolsUpdateInput } from "./ChaosEngineeringToolsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ChaosEngineeringToolsControllerBase {
  constructor(
    protected readonly service: ChaosEngineeringToolsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ChaosEngineeringTools })
  @nestAccessControl.UseRoles({
    resource: "ChaosEngineeringTools",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createChaosEngineeringTools(
    @common.Body() data: ChaosEngineeringToolsCreateInput
  ): Promise<ChaosEngineeringTools> {
    return await this.service.createChaosEngineeringTools({
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
  @swagger.ApiOkResponse({ type: [ChaosEngineeringTools] })
  @ApiNestedQuery(ChaosEngineeringToolsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ChaosEngineeringTools",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async chaosEngineeringToolsItems(
    @common.Req() request: Request
  ): Promise<ChaosEngineeringTools[]> {
    const args = plainToClass(ChaosEngineeringToolsFindManyArgs, request.query);
    return this.service.chaosEngineeringToolsItems({
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
  @swagger.ApiOkResponse({ type: ChaosEngineeringTools })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChaosEngineeringTools",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async chaosEngineeringTools(
    @common.Param() params: ChaosEngineeringToolsWhereUniqueInput
  ): Promise<ChaosEngineeringTools | null> {
    const result = await this.service.chaosEngineeringTools({
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
  @swagger.ApiOkResponse({ type: ChaosEngineeringTools })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChaosEngineeringTools",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateChaosEngineeringTools(
    @common.Param() params: ChaosEngineeringToolsWhereUniqueInput,
    @common.Body() data: ChaosEngineeringToolsUpdateInput
  ): Promise<ChaosEngineeringTools | null> {
    try {
      return await this.service.updateChaosEngineeringTools({
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
  @swagger.ApiOkResponse({ type: ChaosEngineeringTools })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChaosEngineeringTools",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteChaosEngineeringTools(
    @common.Param() params: ChaosEngineeringToolsWhereUniqueInput
  ): Promise<ChaosEngineeringTools | null> {
    try {
      return await this.service.deleteChaosEngineeringTools({
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
