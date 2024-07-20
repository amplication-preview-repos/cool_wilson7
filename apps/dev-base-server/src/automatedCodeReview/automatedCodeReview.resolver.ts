import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AutomatedCodeReviewResolverBase } from "./base/automatedCodeReview.resolver.base";
import { AutomatedCodeReview } from "./base/AutomatedCodeReview";
import { AutomatedCodeReviewService } from "./automatedCodeReview.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AutomatedCodeReview)
export class AutomatedCodeReviewResolver extends AutomatedCodeReviewResolverBase {
  constructor(
    protected readonly service: AutomatedCodeReviewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
