import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataLineageTrackingServiceBase } from "./base/dataLineageTracking.service.base";

@Injectable()
export class DataLineageTrackingService extends DataLineageTrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
