import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AiCodeAssistanceServiceBase } from "./base/aiCodeAssistance.service.base";

@Injectable()
export class AiCodeAssistanceService extends AiCodeAssistanceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
