import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DecentralizedStorageServiceBase } from "./base/decentralizedStorage.service.base";

@Injectable()
export class DecentralizedStorageService extends DecentralizedStorageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
