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
  AutomatedPiiDetection as PrismaAutomatedPiiDetection,
} from "@prisma/client";

export class AutomatedPiiDetectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AutomatedPiiDetectionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.automatedPiiDetection.count(args);
  }

  async automatedPiiDetections(
    args: Prisma.AutomatedPiiDetectionFindManyArgs
  ): Promise<PrismaAutomatedPiiDetection[]> {
    return this.prisma.automatedPiiDetection.findMany(args);
  }
  async automatedPiiDetection(
    args: Prisma.AutomatedPiiDetectionFindUniqueArgs
  ): Promise<PrismaAutomatedPiiDetection | null> {
    return this.prisma.automatedPiiDetection.findUnique(args);
  }
  async createAutomatedPiiDetection(
    args: Prisma.AutomatedPiiDetectionCreateArgs
  ): Promise<PrismaAutomatedPiiDetection> {
    return this.prisma.automatedPiiDetection.create(args);
  }
  async updateAutomatedPiiDetection(
    args: Prisma.AutomatedPiiDetectionUpdateArgs
  ): Promise<PrismaAutomatedPiiDetection> {
    return this.prisma.automatedPiiDetection.update(args);
  }
  async deleteAutomatedPiiDetection(
    args: Prisma.AutomatedPiiDetectionDeleteArgs
  ): Promise<PrismaAutomatedPiiDetection> {
    return this.prisma.automatedPiiDetection.delete(args);
  }
}
