import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArAppPrototypingServiceBase } from "./base/arAppPrototyping.service.base";

@Injectable()
export class ArAppPrototypingService extends ArAppPrototypingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
