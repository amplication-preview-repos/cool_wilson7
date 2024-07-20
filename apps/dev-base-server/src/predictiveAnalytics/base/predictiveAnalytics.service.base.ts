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
  PredictiveAnalytics as PrismaPredictiveAnalytics,
} from "@prisma/client";

export class PredictiveAnalyticsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PredictiveAnalyticsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.predictiveAnalytics.count(args);
  }

  async predictiveAnalyticsItems(
    args: Prisma.PredictiveAnalyticsFindManyArgs
  ): Promise<PrismaPredictiveAnalytics[]> {
    return this.prisma.predictiveAnalytics.findMany(args);
  }
  async predictiveAnalytics(
    args: Prisma.PredictiveAnalyticsFindUniqueArgs
  ): Promise<PrismaPredictiveAnalytics | null> {
    return this.prisma.predictiveAnalytics.findUnique(args);
  }
  async createPredictiveAnalytics(
    args: Prisma.PredictiveAnalyticsCreateArgs
  ): Promise<PrismaPredictiveAnalytics> {
    return this.prisma.predictiveAnalytics.create(args);
  }
  async updatePredictiveAnalytics(
    args: Prisma.PredictiveAnalyticsUpdateArgs
  ): Promise<PrismaPredictiveAnalytics> {
    return this.prisma.predictiveAnalytics.update(args);
  }
  async deletePredictiveAnalytics(
    args: Prisma.PredictiveAnalyticsDeleteArgs
  ): Promise<PrismaPredictiveAnalytics> {
    return this.prisma.predictiveAnalytics.delete(args);
  }
}
