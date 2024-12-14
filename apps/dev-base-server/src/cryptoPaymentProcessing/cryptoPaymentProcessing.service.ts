import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CryptoPaymentProcessingServiceBase } from "./base/cryptoPaymentProcessing.service.base";

@Injectable()
export class CryptoPaymentProcessingService extends CryptoPaymentProcessingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
