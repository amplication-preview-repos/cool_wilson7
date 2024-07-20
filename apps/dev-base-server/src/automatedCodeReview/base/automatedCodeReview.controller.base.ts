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
import { AutomatedCodeReviewService } from "../automatedCodeReview.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AutomatedCodeReviewCreateInput } from "./AutomatedCodeReviewCreateInput";
import { AutomatedCodeReview } from "./AutomatedCodeReview";
import { AutomatedCodeReviewFindManyArgs } from "./AutomatedCodeReviewFindManyArgs";
import { AutomatedCodeReviewWhereUniqueInput } from "./AutomatedCodeReviewWhereUniqueInput";
import { AutomatedCodeReviewUpdateInput } from "./AutomatedCodeReviewUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AutomatedCodeReviewControllerBase {
  constructor(
    protected readonly service: AutomatedCodeReviewService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AutomatedCodeReview })
  @nestAccessControl.UseRoles({
    resource: "AutomatedCodeReview",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAutomatedCodeReview(
    @common.Body() data: AutomatedCodeReviewCreateInput
  ): Promise<AutomatedCodeReview> {
    return await this.service.createAutomatedCodeReview({
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
  @swagger.ApiOkResponse({ type: [AutomatedCodeReview] })
  @ApiNestedQuery(AutomatedCodeReviewFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AutomatedCodeReview",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async automatedCodeReviews(
    @common.Req() request: Request
  ): Promise<AutomatedCodeReview[]> {
    const args = plainToClass(AutomatedCodeReviewFindManyArgs, request.query);
    return this.service.automatedCodeReviews({
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
  @swagger.ApiOkResponse({ type: AutomatedCodeReview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AutomatedCodeReview",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async automatedCodeReview(
    @common.Param() params: AutomatedCodeReviewWhereUniqueInput
  ): Promise<AutomatedCodeReview | null> {
    const result = await this.service.automatedCodeReview({
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
  @swagger.ApiOkResponse({ type: AutomatedCodeReview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AutomatedCodeReview",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAutomatedCodeReview(
    @common.Param() params: AutomatedCodeReviewWhereUniqueInput,
    @common.Body() data: AutomatedCodeReviewUpdateInput
  ): Promise<AutomatedCodeReview | null> {
    try {
      return await this.service.updateAutomatedCodeReview({
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
  @swagger.ApiOkResponse({ type: AutomatedCodeReview })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AutomatedCodeReview",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAutomatedCodeReview(
    @common.Param() params: AutomatedCodeReviewWhereUniqueInput
  ): Promise<AutomatedCodeReview | null> {
    try {
      return await this.service.deleteAutomatedCodeReview({
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
