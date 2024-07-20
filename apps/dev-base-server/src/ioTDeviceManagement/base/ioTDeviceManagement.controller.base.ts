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
import { IoTDeviceManagementService } from "../ioTDeviceManagement.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { IoTDeviceManagementCreateInput } from "./IoTDeviceManagementCreateInput";
import { IoTDeviceManagement } from "./IoTDeviceManagement";
import { IoTDeviceManagementFindManyArgs } from "./IoTDeviceManagementFindManyArgs";
import { IoTDeviceManagementWhereUniqueInput } from "./IoTDeviceManagementWhereUniqueInput";
import { IoTDeviceManagementUpdateInput } from "./IoTDeviceManagementUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class IoTDeviceManagementControllerBase {
  constructor(
    protected readonly service: IoTDeviceManagementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: IoTDeviceManagement })
  @nestAccessControl.UseRoles({
    resource: "IoTDeviceManagement",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: IoTDeviceManagementCreateInput,
  })
  async createIoTDeviceManagement(
    @common.Body() data: IoTDeviceManagementCreateInput
  ): Promise<IoTDeviceManagement> {
    return await this.service.createIoTDeviceManagement({
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
  @swagger.ApiOkResponse({ type: [IoTDeviceManagement] })
  @ApiNestedQuery(IoTDeviceManagementFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "IoTDeviceManagement",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ioTDeviceManagements(
    @common.Req() request: Request
  ): Promise<IoTDeviceManagement[]> {
    const args = plainToClass(IoTDeviceManagementFindManyArgs, request.query);
    return this.service.ioTDeviceManagements({
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
  @swagger.ApiOkResponse({ type: IoTDeviceManagement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "IoTDeviceManagement",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async ioTDeviceManagement(
    @common.Param() params: IoTDeviceManagementWhereUniqueInput
  ): Promise<IoTDeviceManagement | null> {
    const result = await this.service.ioTDeviceManagement({
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
  @swagger.ApiOkResponse({ type: IoTDeviceManagement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "IoTDeviceManagement",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: IoTDeviceManagementUpdateInput,
  })
  async updateIoTDeviceManagement(
    @common.Param() params: IoTDeviceManagementWhereUniqueInput,
    @common.Body() data: IoTDeviceManagementUpdateInput
  ): Promise<IoTDeviceManagement | null> {
    try {
      return await this.service.updateIoTDeviceManagement({
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
  @swagger.ApiOkResponse({ type: IoTDeviceManagement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "IoTDeviceManagement",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteIoTDeviceManagement(
    @common.Param() params: IoTDeviceManagementWhereUniqueInput
  ): Promise<IoTDeviceManagement | null> {
    try {
      return await this.service.deleteIoTDeviceManagement({
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
