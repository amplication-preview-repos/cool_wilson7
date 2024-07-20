import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccessibilityComplianceServiceBase } from "./base/accessibilityCompliance.service.base";

@Injectable()
export class AccessibilityComplianceService extends AccessibilityComplianceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
