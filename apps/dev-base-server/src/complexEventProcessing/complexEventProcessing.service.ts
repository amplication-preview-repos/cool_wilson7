import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComplexEventProcessingServiceBase } from "./base/complexEventProcessing.service.base";

@Injectable()
export class ComplexEventProcessingService extends ComplexEventProcessingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
