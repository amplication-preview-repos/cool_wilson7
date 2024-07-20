import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FederatedLearningServiceBase } from "./base/federatedLearning.service.base";

@Injectable()
export class FederatedLearningService extends FederatedLearningServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
