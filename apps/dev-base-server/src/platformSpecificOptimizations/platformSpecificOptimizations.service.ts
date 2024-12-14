import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlatformSpecificOptimizationsServiceBase } from "./base/platformSpecificOptimizations.service.base";

@Injectable()
export class PlatformSpecificOptimizationsService extends PlatformSpecificOptimizationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
