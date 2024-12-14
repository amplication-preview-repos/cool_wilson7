import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GraphDatabaseServiceBase } from "./base/graphDatabase.service.base";

@Injectable()
export class GraphDatabaseService extends GraphDatabaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
