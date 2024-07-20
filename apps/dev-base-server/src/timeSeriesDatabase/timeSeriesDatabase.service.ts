import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TimeSeriesDatabaseServiceBase } from "./base/timeSeriesDatabase.service.base";

@Injectable()
export class TimeSeriesDatabaseService extends TimeSeriesDatabaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
