import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutomatedPiiDetectionServiceBase } from "./base/automatedPiiDetection.service.base";

@Injectable()
export class AutomatedPiiDetectionService extends AutomatedPiiDetectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
