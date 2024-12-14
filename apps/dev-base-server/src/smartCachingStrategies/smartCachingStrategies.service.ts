import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SmartCachingStrategiesServiceBase } from "./base/smartCachingStrategies.service.base";

@Injectable()
export class SmartCachingStrategiesService extends SmartCachingStrategiesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
