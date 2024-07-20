import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrossPlatformDevelopmentServiceBase } from "./base/crossPlatformDevelopment.service.base";

@Injectable()
export class CrossPlatformDevelopmentService extends CrossPlatformDevelopmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
