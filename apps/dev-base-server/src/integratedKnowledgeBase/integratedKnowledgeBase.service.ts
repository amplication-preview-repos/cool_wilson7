import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IntegratedKnowledgeBaseServiceBase } from "./base/integratedKnowledgeBase.service.base";

@Injectable()
export class IntegratedKnowledgeBaseService extends IntegratedKnowledgeBaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
