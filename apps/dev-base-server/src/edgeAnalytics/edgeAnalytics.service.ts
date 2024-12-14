import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EdgeAnalyticsServiceBase } from "./base/edgeAnalytics.service.base";

@Injectable()
export class EdgeAnalyticsService extends EdgeAnalyticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
