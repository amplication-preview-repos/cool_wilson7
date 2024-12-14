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
import { DecentralizedStorageService } from "../decentralizedStorage.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DecentralizedStorageCreateInput } from "./DecentralizedStorageCreateInput";
import { DecentralizedStorage } from "./DecentralizedStorage";
import { DecentralizedStorageFindManyArgs } from "./DecentralizedStorageFindManyArgs";
import { DecentralizedStorageWhereUniqueInput } from "./DecentralizedStorageWhereUniqueInput";
import { DecentralizedStorageUpdateInput } from "./DecentralizedStorageUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DecentralizedStorageControllerBase {
  constructor(
    protected readonly service: DecentralizedStorageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DecentralizedStorage })
  @nestAccessControl.UseRoles({
    resource: "DecentralizedStorage",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: DecentralizedStorageCreateInput,
  })
  async createDecentralizedStorage(
    @common.Body() data: DecentralizedStorageCreateInput
  ): Promise<DecentralizedStorage> {
    return await this.service.createDecentralizedStorage({
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
  @swagger.ApiOkResponse({ type: [DecentralizedStorage] })
  @ApiNestedQuery(DecentralizedStorageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "DecentralizedStorage",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async decentralizedStorages(
    @common.Req() request: Request
  ): Promise<DecentralizedStorage[]> {
    const args = plainToClass(DecentralizedStorageFindManyArgs, request.query);
    return this.service.decentralizedStorages({
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
  @swagger.ApiOkResponse({ type: DecentralizedStorage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DecentralizedStorage",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async decentralizedStorage(
    @common.Param() params: DecentralizedStorageWhereUniqueInput
  ): Promise<DecentralizedStorage | null> {
    const result = await this.service.decentralizedStorage({
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
  @swagger.ApiOkResponse({ type: DecentralizedStorage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DecentralizedStorage",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: DecentralizedStorageUpdateInput,
  })
  async updateDecentralizedStorage(
    @common.Param() params: DecentralizedStorageWhereUniqueInput,
    @common.Body() data: DecentralizedStorageUpdateInput
  ): Promise<DecentralizedStorage | null> {
    try {
      return await this.service.updateDecentralizedStorage({
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
  @swagger.ApiOkResponse({ type: DecentralizedStorage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "DecentralizedStorage",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteDecentralizedStorage(
    @common.Param() params: DecentralizedStorageWhereUniqueInput
  ): Promise<DecentralizedStorage | null> {
    try {
      return await this.service.deleteDecentralizedStorage({
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
