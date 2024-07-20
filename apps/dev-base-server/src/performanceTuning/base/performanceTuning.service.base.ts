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
  PerformanceTuning as PrismaPerformanceTuning,
} from "@prisma/client";

export class PerformanceTuningServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PerformanceTuningCountArgs, "select">
  ): Promise<number> {
    return this.prisma.performanceTuning.count(args);
  }

  async performanceTunings(
    args: Prisma.PerformanceTuningFindManyArgs
  ): Promise<PrismaPerformanceTuning[]> {
    return this.prisma.performanceTuning.findMany(args);
  }
  async performanceTuning(
    args: Prisma.PerformanceTuningFindUniqueArgs
  ): Promise<PrismaPerformanceTuning | null> {
    return this.prisma.performanceTuning.findUnique(args);
  }
  async createPerformanceTuning(
    args: Prisma.PerformanceTuningCreateArgs
  ): Promise<PrismaPerformanceTuning> {
    return this.prisma.performanceTuning.create(args);
  }
  async updatePerformanceTuning(
    args: Prisma.PerformanceTuningUpdateArgs
  ): Promise<PrismaPerformanceTuning> {
    return this.prisma.performanceTuning.update(args);
  }
  async deletePerformanceTuning(
    args: Prisma.PerformanceTuningDeleteArgs
  ): Promise<PrismaPerformanceTuning> {
    return this.prisma.performanceTuning.delete(args);
  }
}
