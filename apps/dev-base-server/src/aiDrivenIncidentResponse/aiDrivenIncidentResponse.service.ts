import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiDrivenIncidentResponseServiceBase } from "./base/aiDrivenIncidentResponse.service.base";

@Injectable()
export class AiDrivenIncidentResponseService extends AiDrivenIncidentResponseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
