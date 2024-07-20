import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrossPlatformTestingAutomationServiceBase } from "./base/crossPlatformTestingAutomation.service.base";

@Injectable()
export class CrossPlatformTestingAutomationService extends CrossPlatformTestingAutomationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
