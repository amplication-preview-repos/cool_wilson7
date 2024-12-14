import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutomatedEtlPipelinesServiceBase } from "./base/automatedEtlPipelines.service.base";

@Injectable()
export class AutomatedEtlPipelinesService extends AutomatedEtlPipelinesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
