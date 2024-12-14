import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutomatedCodeReviewServiceBase } from "./base/automatedCodeReview.service.base";

@Injectable()
export class AutomatedCodeReviewService extends AutomatedCodeReviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
