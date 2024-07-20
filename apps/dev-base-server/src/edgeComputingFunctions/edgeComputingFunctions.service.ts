import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EdgeComputingFunctionsServiceBase } from "./base/edgeComputingFunctions.service.base";

@Injectable()
export class EdgeComputingFunctionsService extends EdgeComputingFunctionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
