import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PredictiveScalingServiceBase } from "./base/predictiveScaling.service.base";

@Injectable()
export class PredictiveScalingService extends PredictiveScalingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
