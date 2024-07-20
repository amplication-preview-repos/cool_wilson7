import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BusinessIntelligenceDashboardsServiceBase } from "./base/businessIntelligenceDashboards.service.base";

@Injectable()
export class BusinessIntelligenceDashboardsService extends BusinessIntelligenceDashboardsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
