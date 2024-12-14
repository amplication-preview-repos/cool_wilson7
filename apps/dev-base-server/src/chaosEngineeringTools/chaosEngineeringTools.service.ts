import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChaosEngineeringToolsServiceBase } from "./base/chaosEngineeringTools.service.base";

@Injectable()
export class ChaosEngineeringToolsService extends ChaosEngineeringToolsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
