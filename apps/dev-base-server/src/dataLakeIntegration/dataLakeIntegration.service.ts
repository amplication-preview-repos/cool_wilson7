import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataLakeIntegrationServiceBase } from "./base/dataLakeIntegration.service.base";

@Injectable()
export class DataLakeIntegrationService extends DataLakeIntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
