import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SmartContractDevelopmentServiceBase } from "./base/smartContractDevelopment.service.base";

@Injectable()
export class SmartContractDevelopmentService extends SmartContractDevelopmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
