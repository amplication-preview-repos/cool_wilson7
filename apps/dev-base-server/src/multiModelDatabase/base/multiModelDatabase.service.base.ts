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
  MultiModelDatabase as PrismaMultiModelDatabase,
} from "@prisma/client";

export class MultiModelDatabaseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.MultiModelDatabaseCountArgs, "select">
  ): Promise<number> {
    return this.prisma.multiModelDatabase.count(args);
  }

  async multiModelDatabases(
    args: Prisma.MultiModelDatabaseFindManyArgs
  ): Promise<PrismaMultiModelDatabase[]> {
    return this.prisma.multiModelDatabase.findMany(args);
  }
  async multiModelDatabase(
    args: Prisma.MultiModelDatabaseFindUniqueArgs
  ): Promise<PrismaMultiModelDatabase | null> {
    return this.prisma.multiModelDatabase.findUnique(args);
  }
  async createMultiModelDatabase(
    args: Prisma.MultiModelDatabaseCreateArgs
  ): Promise<PrismaMultiModelDatabase> {
    return this.prisma.multiModelDatabase.create(args);
  }
  async updateMultiModelDatabase(
    args: Prisma.MultiModelDatabaseUpdateArgs
  ): Promise<PrismaMultiModelDatabase> {
    return this.prisma.multiModelDatabase.update(args);
  }
  async deleteMultiModelDatabase(
    args: Prisma.MultiModelDatabaseDeleteArgs
  ): Promise<PrismaMultiModelDatabase> {
    return this.prisma.multiModelDatabase.delete(args);
  }
}
