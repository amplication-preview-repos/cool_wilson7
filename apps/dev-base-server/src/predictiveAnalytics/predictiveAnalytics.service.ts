import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PredictiveAnalyticsServiceBase } from "./base/predictiveAnalytics.service.base";

@Injectable()
export class PredictiveAnalyticsService extends PredictiveAnalyticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
