import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarbonFootprintTrackingServiceBase } from "./base/carbonFootprintTracking.service.base";

@Injectable()
export class CarbonFootprintTrackingService extends CarbonFootprintTrackingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
