import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HomomorphicEncryptionServiceBase } from "./base/homomorphicEncryption.service.base";

@Injectable()
export class HomomorphicEncryptionService extends HomomorphicEncryptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
