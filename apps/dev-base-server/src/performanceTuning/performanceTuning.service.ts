import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PerformanceTuningServiceBase } from "./base/performanceTuning.service.base";

@Injectable()
export class PerformanceTuningService extends PerformanceTuningServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
