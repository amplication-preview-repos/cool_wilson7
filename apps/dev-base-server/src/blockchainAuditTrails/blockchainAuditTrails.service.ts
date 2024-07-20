import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlockchainAuditTrailsServiceBase } from "./base/blockchainAuditTrails.service.base";

@Injectable()
export class BlockchainAuditTrailsService extends BlockchainAuditTrailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
