import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DatabaseQueryOptimizationServiceBase } from "./base/databaseQueryOptimization.service.base";

@Injectable()
export class DatabaseQueryOptimizationService extends DatabaseQueryOptimizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
