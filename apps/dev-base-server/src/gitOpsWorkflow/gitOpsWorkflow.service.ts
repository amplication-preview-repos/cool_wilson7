import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GitOpsWorkflowServiceBase } from "./base/gitOpsWorkflow.service.base";

@Injectable()
export class GitOpsWorkflowService extends GitOpsWorkflowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
