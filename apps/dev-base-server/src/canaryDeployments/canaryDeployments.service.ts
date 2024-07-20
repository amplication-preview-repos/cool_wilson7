import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CanaryDeploymentsServiceBase } from "./base/canaryDeployments.service.base";

@Injectable()
export class CanaryDeploymentsService extends CanaryDeploymentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
