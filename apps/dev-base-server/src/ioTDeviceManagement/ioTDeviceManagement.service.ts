import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IoTDeviceManagementServiceBase } from "./base/ioTDeviceManagement.service.base";

@Injectable()
export class IoTDeviceManagementService extends IoTDeviceManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
