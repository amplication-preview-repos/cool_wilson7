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
import { AutomatedThreatDetectionService } from "../automatedThreatDetection.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AutomatedThreatDetectionCreateInput } from "./AutomatedThreatDetectionCreateInput";
import { AutomatedThreatDetection } from "./AutomatedThreatDetection";
import { AutomatedThreatDetectionFindManyArgs } from "./AutomatedThreatDetectionFindManyArgs";
import { AutomatedThreatDetectionWhereUniqueInput } from "./AutomatedThreatDetectionWhereUniqueInput";
import { AutomatedThreatDetectionUpdateInput } from "./AutomatedThreatDetectionUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AutomatedThreatDetectionControllerBase {
  constructor(
    protected readonly service: AutomatedThreatDetectionService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AutomatedThreatDetection })
  @nestAccessControl.UseRoles({
    resource: "AutomatedThreatDetection",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAutomatedThreatDetection(
    @common.Body() data: AutomatedThreatDetectionCreateInput
  ): Promise<AutomatedThreatDetection> {
    return await this.service.createAutomatedThreatDetection({
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
  @swagger.ApiOkResponse({ type: [AutomatedThreatDetection] })
  @ApiNestedQuery(AutomatedThreatDetectionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AutomatedThreatDetection",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async automatedThreatDetections(
    @common.Req() request: Request
  ): Promise<AutomatedThreatDetection[]> {
    const args = plainToClass(
      AutomatedThreatDetectionFindManyArgs,
      request.query
    );
    return this.service.automatedThreatDetections({
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
  @swagger.ApiOkResponse({ type: AutomatedThreatDetection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AutomatedThreatDetection",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async automatedThreatDetection(
    @common.Param() params: AutomatedThreatDetectionWhereUniqueInput
  ): Promise<AutomatedThreatDetection | null> {
    const result = await this.service.automatedThreatDetection({
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
  @swagger.ApiOkResponse({ type: AutomatedThreatDetection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AutomatedThreatDetection",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAutomatedThreatDetection(
    @common.Param() params: AutomatedThreatDetectionWhereUniqueInput,
    @common.Body() data: AutomatedThreatDetectionUpdateInput
  ): Promise<AutomatedThreatDetection | null> {
    try {
      return await this.service.updateAutomatedThreatDetection({
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
  @swagger.ApiOkResponse({ type: AutomatedThreatDetection })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AutomatedThreatDetection",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAutomatedThreatDetection(
    @common.Param() params: AutomatedThreatDetectionWhereUniqueInput
  ): Promise<AutomatedThreatDetection | null> {
    try {
      return await this.service.deleteAutomatedThreatDetection({
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
