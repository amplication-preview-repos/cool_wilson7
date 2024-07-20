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
  RealTimeDatabase as PrismaRealTimeDatabase,
} from "@prisma/client";

export class RealTimeDatabaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.RealTimeDatabaseCountArgs, "select">
  ): Promise<number> {
    return this.prisma.realTimeDatabase.count(args);
  }

  async realTimeDatabases(
    args: Prisma.RealTimeDatabaseFindManyArgs
  ): Promise<PrismaRealTimeDatabase[]> {
    return this.prisma.realTimeDatabase.findMany(args);
  }
  async realTimeDatabase(
    args: Prisma.RealTimeDatabaseFindUniqueArgs
  ): Promise<PrismaRealTimeDatabase | null> {
    return this.prisma.realTimeDatabase.findUnique(args);
  }
  async createRealTimeDatabase(
    args: Prisma.RealTimeDatabaseCreateArgs
  ): Promise<PrismaRealTimeDatabase> {
    return this.prisma.realTimeDatabase.create(args);
  }
  async updateRealTimeDatabase(
    args: Prisma.RealTimeDatabaseUpdateArgs
  ): Promise<PrismaRealTimeDatabase> {
    return this.prisma.realTimeDatabase.update(args);
  }
  async deleteRealTimeDatabase(
    args: Prisma.RealTimeDatabaseDeleteArgs
  ): Promise<PrismaRealTimeDatabase> {
    return this.prisma.realTimeDatabase.delete(args);
  }
}
