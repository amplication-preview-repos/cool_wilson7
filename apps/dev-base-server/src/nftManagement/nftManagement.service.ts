import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NftManagementServiceBase } from "./base/nftManagement.service.base";

@Injectable()
export class NftManagementService extends NftManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
