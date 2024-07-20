import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BehavioralBiometricsServiceBase } from "./base/behavioralBiometrics.service.base";

@Injectable()
export class BehavioralBiometricsService extends BehavioralBiometricsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
