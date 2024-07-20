import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StreamProcessingServiceBase } from "./base/streamProcessing.service.base";

@Injectable()
export class StreamProcessingService extends StreamProcessingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
