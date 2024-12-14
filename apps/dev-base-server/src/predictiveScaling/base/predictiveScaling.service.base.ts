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
  PredictiveScaling as PrismaPredictiveScaling,
} from "@prisma/client";

export class PredictiveScalingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PredictiveScalingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.predictiveScaling.count(args);
  }

  async predictiveScalings(
    args: Prisma.PredictiveScalingFindManyArgs
  ): Promise<PrismaPredictiveScaling[]> {
    return this.prisma.predictiveScaling.findMany(args);
  }
  async predictiveScaling(
    args: Prisma.PredictiveScalingFindUniqueArgs
  ): Promise<PrismaPredictiveScaling | null> {
    return this.prisma.predictiveScaling.findUnique(args);
  }
  async createPredictiveScaling(
    args: Prisma.PredictiveScalingCreateArgs
  ): Promise<PrismaPredictiveScaling> {
    return this.prisma.predictiveScaling.create(args);
  }
  async updatePredictiveScaling(
    args: Prisma.PredictiveScalingUpdateArgs
  ): Promise<PrismaPredictiveScaling> {
    return this.prisma.predictiveScaling.update(args);
  }
  async deletePredictiveScaling(
    args: Prisma.PredictiveScalingDeleteArgs
  ): Promise<PrismaPredictiveScaling> {
    return this.prisma.predictiveScaling.delete(args);
  }
}
