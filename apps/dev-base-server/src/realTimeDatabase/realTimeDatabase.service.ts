import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RealTimeDatabaseServiceBase } from "./base/realTimeDatabase.service.base";

@Injectable()
export class RealTimeDatabaseService extends RealTimeDatabaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
