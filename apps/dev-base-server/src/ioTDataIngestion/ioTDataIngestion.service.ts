import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IoTDataIngestionServiceBase } from "./base/ioTDataIngestion.service.base";

@Injectable()
export class IoTDataIngestionService extends IoTDataIngestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
