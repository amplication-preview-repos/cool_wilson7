import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutomatedThreatDetectionServiceBase } from "./base/automatedThreatDetection.service.base";

@Injectable()
export class AutomatedThreatDetectionService extends AutomatedThreatDetectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
