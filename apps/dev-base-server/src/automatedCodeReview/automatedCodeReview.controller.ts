import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AutomatedCodeReviewService } from "./automatedCodeReview.service";
import { AutomatedCodeReviewControllerBase } from "./base/automatedCodeReview.controller.base";

@swagger.ApiTags("automatedCodeReviews")
@common.Controller("automatedCodeReviews")
export class AutomatedCodeReviewController extends AutomatedCodeReviewControllerBase {
  constructor(
    protected readonly service: AutomatedCodeReviewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
