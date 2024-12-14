import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutomatedFeatureEngineeringServiceBase } from "./base/automatedFeatureEngineering.service.base";

@Injectable()
export class AutomatedFeatureEngineeringService extends AutomatedFeatureEngineeringServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
