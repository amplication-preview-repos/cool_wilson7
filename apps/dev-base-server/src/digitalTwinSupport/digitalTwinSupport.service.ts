import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DigitalTwinSupportServiceBase } from "./base/digitalTwinSupport.service.base";

@Injectable()
export class DigitalTwinSupportService extends DigitalTwinSupportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
