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
  EdgeComputingFunctions as PrismaEdgeComputingFunctions,
} from "@prisma/client";

export class EdgeComputingFunctionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EdgeComputingFunctionsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.edgeComputingFunctions.count(args);
  }

  async edgeComputingFunctionsItems(
    args: Prisma.EdgeComputingFunctionsFindManyArgs
  ): Promise<PrismaEdgeComputingFunctions[]> {
    return this.prisma.edgeComputingFunctions.findMany(args);
  }
  async edgeComputingFunctions(
    args: Prisma.EdgeComputingFunctionsFindUniqueArgs
  ): Promise<PrismaEdgeComputingFunctions | null> {
    return this.prisma.edgeComputingFunctions.findUnique(args);
  }
  async createEdgeComputingFunctions(
    args: Prisma.EdgeComputingFunctionsCreateArgs
  ): Promise<PrismaEdgeComputingFunctions> {
    return this.prisma.edgeComputingFunctions.create(args);
  }
  async updateEdgeComputingFunctions(
    args: Prisma.EdgeComputingFunctionsUpdateArgs
  ): Promise<PrismaEdgeComputingFunctions> {
    return this.prisma.edgeComputingFunctions.update(args);
  }
  async deleteEdgeComputingFunctions(
    args: Prisma.EdgeComputingFunctionsDeleteArgs
  ): Promise<PrismaEdgeComputingFunctions> {
    return this.prisma.edgeComputingFunctions.delete(args);
  }
}
