import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExplainableAiToolsServiceBase } from "./base/explainableAiTools.service.base";

@Injectable()
export class ExplainableAiToolsService extends ExplainableAiToolsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
