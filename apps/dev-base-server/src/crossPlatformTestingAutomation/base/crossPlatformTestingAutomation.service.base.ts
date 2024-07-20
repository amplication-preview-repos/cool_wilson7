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
  CrossPlatformTestingAutomation as PrismaCrossPlatformTestingAutomation,
} from "@prisma/client";

export class CrossPlatformTestingAutomationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CrossPlatformTestingAutomationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.crossPlatformTestingAutomation.count(args);
  }

  async crossPlatformTestingAutomations(
    args: Prisma.CrossPlatformTestingAutomationFindManyArgs
  ): Promise<PrismaCrossPlatformTestingAutomation[]> {
    return this.prisma.crossPlatformTestingAutomation.findMany(args);
  }
  async crossPlatformTestingAutomation(
    args: Prisma.CrossPlatformTestingAutomationFindUniqueArgs
  ): Promise<PrismaCrossPlatformTestingAutomation | null> {
    return this.prisma.crossPlatformTestingAutomation.findUnique(args);
  }
  async createCrossPlatformTestingAutomation(
    args: Prisma.CrossPlatformTestingAutomationCreateArgs
  ): Promise<PrismaCrossPlatformTestingAutomation> {
    return this.prisma.crossPlatformTestingAutomation.create(args);
  }
  async updateCrossPlatformTestingAutomation(
    args: Prisma.CrossPlatformTestingAutomationUpdateArgs
  ): Promise<PrismaCrossPlatformTestingAutomation> {
    return this.prisma.crossPlatformTestingAutomation.update(args);
  }
  async deleteCrossPlatformTestingAutomation(
    args: Prisma.CrossPlatformTestingAutomationDeleteArgs
  ): Promise<PrismaCrossPlatformTestingAutomation> {
    return this.prisma.crossPlatformTestingAutomation.delete(args);
  }
}
