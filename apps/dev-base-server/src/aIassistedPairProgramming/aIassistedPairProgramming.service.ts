import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AIassistedPairProgrammingServiceBase } from "./base/aIassistedPairProgramming.service.base";

@Injectable()
export class AIassistedPairProgrammingService extends AIassistedPairProgrammingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
