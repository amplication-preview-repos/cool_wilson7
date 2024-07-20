import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WorkflowBuildersServiceBase } from "./base/workflowBuilders.service.base";

@Injectable()
export class WorkflowBuildersService extends WorkflowBuildersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
