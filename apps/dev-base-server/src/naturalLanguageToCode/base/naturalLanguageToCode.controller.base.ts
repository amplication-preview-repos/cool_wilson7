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
import { NaturalLanguageToCodeService } from "../naturalLanguageToCode.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { NaturalLanguageToCodeCreateInput } from "./NaturalLanguageToCodeCreateInput";
import { NaturalLanguageToCode } from "./NaturalLanguageToCode";
import { NaturalLanguageToCodeFindManyArgs } from "./NaturalLanguageToCodeFindManyArgs";
import { NaturalLanguageToCodeWhereUniqueInput } from "./NaturalLanguageToCodeWhereUniqueInput";
import { NaturalLanguageToCodeUpdateInput } from "./NaturalLanguageToCodeUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class NaturalLanguageToCodeControllerBase {
  constructor(
    protected readonly service: NaturalLanguageToCodeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: NaturalLanguageToCode })
  @nestAccessControl.UseRoles({
    resource: "NaturalLanguageToCode",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createNaturalLanguageToCode(
    @common.Body() data: NaturalLanguageToCodeCreateInput
  ): Promise<NaturalLanguageToCode> {
    return await this.service.createNaturalLanguageToCode({
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
  @swagger.ApiOkResponse({ type: [NaturalLanguageToCode] })
  @ApiNestedQuery(NaturalLanguageToCodeFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "NaturalLanguageToCode",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async naturalLanguageToCodes(
    @common.Req() request: Request
  ): Promise<NaturalLanguageToCode[]> {
    const args = plainToClass(NaturalLanguageToCodeFindManyArgs, request.query);
    return this.service.naturalLanguageToCodes({
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
  @swagger.ApiOkResponse({ type: NaturalLanguageToCode })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "NaturalLanguageToCode",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async naturalLanguageToCode(
    @common.Param() params: NaturalLanguageToCodeWhereUniqueInput
  ): Promise<NaturalLanguageToCode | null> {
    const result = await this.service.naturalLanguageToCode({
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
  @swagger.ApiOkResponse({ type: NaturalLanguageToCode })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "NaturalLanguageToCode",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateNaturalLanguageToCode(
    @common.Param() params: NaturalLanguageToCodeWhereUniqueInput,
    @common.Body() data: NaturalLanguageToCodeUpdateInput
  ): Promise<NaturalLanguageToCode | null> {
    try {
      return await this.service.updateNaturalLanguageToCode({
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
  @swagger.ApiOkResponse({ type: NaturalLanguageToCode })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "NaturalLanguageToCode",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteNaturalLanguageToCode(
    @common.Param() params: NaturalLanguageToCodeWhereUniqueInput
  ): Promise<NaturalLanguageToCode | null> {
    try {
      return await this.service.deleteNaturalLanguageToCode({
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
