import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AutomatedCodeReviewModuleBase } from "./base/automatedCodeReview.module.base";
import { AutomatedCodeReviewService } from "./automatedCodeReview.service";
import { AutomatedCodeReviewController } from "./automatedCodeReview.controller";
import { AutomatedCodeReviewResolver } from "./automatedCodeReview.resolver";

@Module({
  imports: [AutomatedCodeReviewModuleBase, forwardRef(() => AuthModule)],
  controllers: [AutomatedCodeReviewController],
  providers: [AutomatedCodeReviewService, AutomatedCodeReviewResolver],
  exports: [AutomatedCodeReviewService],
})
export class AutomatedCodeReviewModule {}
