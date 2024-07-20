import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EnergyEfficientCodingServiceBase } from "./base/energyEfficientCoding.service.base";

@Injectable()
export class EnergyEfficientCodingService extends EnergyEfficientCodingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
