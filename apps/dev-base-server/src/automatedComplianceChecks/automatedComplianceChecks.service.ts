import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutomatedComplianceChecksServiceBase } from "./base/automatedComplianceChecks.service.base";

@Injectable()
export class AutomatedComplianceChecksService extends AutomatedComplianceChecksServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
