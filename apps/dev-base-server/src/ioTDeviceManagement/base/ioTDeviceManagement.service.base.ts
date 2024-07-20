/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  IoTDeviceManagement as PrismaIoTDeviceManagement,
} from "@prisma/client";

export class IoTDeviceManagementServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.IoTDeviceManagementCountArgs, "select">
  ): Promise<number> {
    return this.prisma.ioTDeviceManagement.count(args);
  }

  async ioTDeviceManagements(
    args: Prisma.IoTDeviceManagementFindManyArgs
  ): Promise<PrismaIoTDeviceManagement[]> {
    return this.prisma.ioTDeviceManagement.findMany(args);
  }
  async ioTDeviceManagement(
    args: Prisma.IoTDeviceManagementFindUniqueArgs
  ): Promise<PrismaIoTDeviceManagement | null> {
    return this.prisma.ioTDeviceManagement.findUnique(args);
  }
  async createIoTDeviceManagement(
    args: Prisma.IoTDeviceManagementCreateArgs
  ): Promise<PrismaIoTDeviceManagement> {
    return this.prisma.ioTDeviceManagement.create(args);
  }
  async updateIoTDeviceManagement(
    args: Prisma.IoTDeviceManagementUpdateArgs
  ): Promise<PrismaIoTDeviceManagement> {
    return this.prisma.ioTDeviceManagement.update(args);
  }
  async deleteIoTDeviceManagement(
    args: Prisma.IoTDeviceManagementDeleteArgs
  ): Promise<PrismaIoTDeviceManagement> {
    return this.prisma.ioTDeviceManagement.delete(args);
  }
}
