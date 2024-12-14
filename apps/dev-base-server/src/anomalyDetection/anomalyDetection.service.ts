import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnomalyDetectionServiceBase } from "./base/anomalyDetection.service.base";

@Injectable()
export class AnomalyDetectionService extends AnomalyDetectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
