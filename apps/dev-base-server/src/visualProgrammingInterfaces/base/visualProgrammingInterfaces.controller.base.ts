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
import { VisualProgrammingInterfacesService } from "../visualProgrammingInterfaces.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VisualProgrammingInterfacesCreateInput } from "./VisualProgrammingInterfacesCreateInput";
import { VisualProgrammingInterfaces } from "./VisualProgrammingInterfaces";
import { VisualProgrammingInterfacesFindManyArgs } from "./VisualProgrammingInterfacesFindManyArgs";
import { VisualProgrammingInterfacesWhereUniqueInput } from "./VisualProgrammingInterfacesWhereUniqueInput";
import { VisualProgrammingInterfacesUpdateInput } from "./VisualProgrammingInterfacesUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VisualProgrammingInterfacesControllerBase {
  constructor(
    protected readonly service: VisualProgrammingInterfacesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VisualProgrammingInterfaces })
  @nestAccessControl.UseRoles({
    resource: "VisualProgrammingInterfaces",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: VisualProgrammingInterfacesCreateInput,
  })
  async createVisualProgrammingInterfaces(
    @common.Body() data: VisualProgrammingInterfacesCreateInput
  ): Promise<VisualProgrammingInterfaces> {
    return await this.service.createVisualProgrammingInterfaces({
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
  @swagger.ApiOkResponse({ type: [VisualProgrammingInterfaces] })
  @ApiNestedQuery(VisualProgrammingInterfacesFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "VisualProgrammingInterfaces",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async visualProgrammingInterfacesItems(
    @common.Req() request: Request
  ): Promise<VisualProgrammingInterfaces[]> {
    const args = plainToClass(
      VisualProgrammingInterfacesFindManyArgs,
      request.query
    );
    return this.service.visualProgrammingInterfacesItems({
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
  @swagger.ApiOkResponse({ type: VisualProgrammingInterfaces })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "VisualProgrammingInterfaces",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async visualProgrammingInterfaces(
    @common.Param() params: VisualProgrammingInterfacesWhereUniqueInput
  ): Promise<VisualProgrammingInterfaces | null> {
    const result = await this.service.visualProgrammingInterfaces({
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
  @swagger.ApiOkResponse({ type: VisualProgrammingInterfaces })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "VisualProgrammingInterfaces",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: VisualProgrammingInterfacesUpdateInput,
  })
  async updateVisualProgrammingInterfaces(
    @common.Param() params: VisualProgrammingInterfacesWhereUniqueInput,
    @common.Body() data: VisualProgrammingInterfacesUpdateInput
  ): Promise<VisualProgrammingInterfaces | null> {
    try {
      return await this.service.updateVisualProgrammingInterfaces({
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
  @swagger.ApiOkResponse({ type: VisualProgrammingInterfaces })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "VisualProgrammingInterfaces",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteVisualProgrammingInterfaces(
    @common.Param() params: VisualProgrammingInterfacesWhereUniqueInput
  ): Promise<VisualProgrammingInterfaces | null> {
    try {
      return await this.service.deleteVisualProgrammingInterfaces({
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
