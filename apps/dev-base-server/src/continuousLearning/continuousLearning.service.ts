import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContinuousLearningServiceBase } from "./base/continuousLearning.service.base";

@Injectable()
export class ContinuousLearningService extends ContinuousLearningServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
