import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RealTimeTranslationServiceBase } from "./base/realTimeTranslation.service.base";

@Injectable()
export class RealTimeTranslationService extends RealTimeTranslationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
