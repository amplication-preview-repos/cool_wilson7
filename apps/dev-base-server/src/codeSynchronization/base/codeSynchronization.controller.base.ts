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
import { CodeSynchronizationService } from "../codeSynchronization.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CodeSynchronizationCreateInput } from "./CodeSynchronizationCreateInput";
import { CodeSynchronization } from "./CodeSynchronization";
import { CodeSynchronizationFindManyArgs } from "./CodeSynchronizationFindManyArgs";
import { CodeSynchronizationWhereUniqueInput } from "./CodeSynchronizationWhereUniqueInput";
import { CodeSynchronizationUpdateInput } from "./CodeSynchronizationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class CodeSynchronizationControllerBase {
  constructor(
    protected readonly service: CodeSynchronizationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CodeSynchronization })
  @nestAccessControl.UseRoles({
    resource: "CodeSynchronization",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CodeSynchronizationCreateInput,
  })
  async createCodeSynchronization(
    @common.Body() data: CodeSynchronizationCreateInput
  ): Promise<CodeSynchronization> {
    return await this.service.createCodeSynchronization({
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
  @swagger.ApiOkResponse({ type: [CodeSynchronization] })
  @ApiNestedQuery(CodeSynchronizationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "CodeSynchronization",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async codeSynchronizations(
    @common.Req() request: Request
  ): Promise<CodeSynchronization[]> {
    const args = plainToClass(CodeSynchronizationFindManyArgs, request.query);
    return this.service.codeSynchronizations({
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
  @swagger.ApiOkResponse({ type: CodeSynchronization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CodeSynchronization",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async codeSynchronization(
    @common.Param() params: CodeSynchronizationWhereUniqueInput
  ): Promise<CodeSynchronization | null> {
    const result = await this.service.codeSynchronization({
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
  @swagger.ApiOkResponse({ type: CodeSynchronization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CodeSynchronization",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: CodeSynchronizationUpdateInput,
  })
  async updateCodeSynchronization(
    @common.Param() params: CodeSynchronizationWhereUniqueInput,
    @common.Body() data: CodeSynchronizationUpdateInput
  ): Promise<CodeSynchronization | null> {
    try {
      return await this.service.updateCodeSynchronization({
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
  @swagger.ApiOkResponse({ type: CodeSynchronization })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "CodeSynchronization",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteCodeSynchronization(
    @common.Param() params: CodeSynchronizationWhereUniqueInput
  ): Promise<CodeSynchronization | null> {
    try {
      return await this.service.deleteCodeSynchronization({
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
