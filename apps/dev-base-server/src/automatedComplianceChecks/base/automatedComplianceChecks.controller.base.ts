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
import { AutomatedComplianceChecksService } from "../automatedComplianceChecks.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AutomatedComplianceChecksCreateInput } from "./AutomatedComplianceChecksCreateInput";
import { AutomatedComplianceChecks } from "./AutomatedComplianceChecks";
import { AutomatedComplianceChecksFindManyArgs } from "./AutomatedComplianceChecksFindManyArgs";
import { AutomatedComplianceChecksWhereUniqueInput } from "./AutomatedComplianceChecksWhereUniqueInput";
import { AutomatedComplianceChecksUpdateInput } from "./AutomatedComplianceChecksUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AutomatedComplianceChecksControllerBase {
  constructor(
    protected readonly service: AutomatedComplianceChecksService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AutomatedComplianceChecks })
  @nestAccessControl.UseRoles({
    resource: "AutomatedComplianceChecks",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AutomatedComplianceChecksCreateInput,
  })
  async createAutomatedComplianceChecks(
    @common.Body() data: AutomatedComplianceChecksCreateInput
  ): Promise<AutomatedComplianceChecks> {
    return await this.service.createAutomatedComplianceChecks({
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
  @swagger.ApiOkResponse({ type: [AutomatedComplianceChecks] })
  @ApiNestedQuery(AutomatedComplianceChecksFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AutomatedComplianceChecks",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async automatedComplianceChecksItems(
    @common.Req() request: Request
  ): Promise<AutomatedComplianceChecks[]> {
    const args = plainToClass(
      AutomatedComplianceChecksFindManyArgs,
      request.query
    );
    return this.service.automatedComplianceChecksItems({
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
  @swagger.ApiOkResponse({ type: AutomatedComplianceChecks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AutomatedComplianceChecks",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async automatedComplianceChecks(
    @common.Param() params: AutomatedComplianceChecksWhereUniqueInput
  ): Promise<AutomatedComplianceChecks | null> {
    const result = await this.service.automatedComplianceChecks({
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
  @swagger.ApiOkResponse({ type: AutomatedComplianceChecks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AutomatedComplianceChecks",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AutomatedComplianceChecksUpdateInput,
  })
  async updateAutomatedComplianceChecks(
    @common.Param() params: AutomatedComplianceChecksWhereUniqueInput,
    @common.Body() data: AutomatedComplianceChecksUpdateInput
  ): Promise<AutomatedComplianceChecks | null> {
    try {
      return await this.service.updateAutomatedComplianceChecks({
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
  @swagger.ApiOkResponse({ type: AutomatedComplianceChecks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AutomatedComplianceChecks",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAutomatedComplianceChecks(
    @common.Param() params: AutomatedComplianceChecksWhereUniqueInput
  ): Promise<AutomatedComplianceChecks | null> {
    try {
      return await this.service.deleteAutomatedComplianceChecks({
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
