import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentDatabaseServiceBase } from "./base/documentDatabase.service.base";

@Injectable()
export class DocumentDatabaseService extends DocumentDatabaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
