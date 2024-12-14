/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, GraphQlSupport as PrismaGraphQlSupport } from "@prisma/client";

export class GraphQlSupportServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GraphQlSupportCountArgs, "select">
  ): Promise<number> {
    return this.prisma.graphQlSupport.count(args);
  }

  async graphQlSupports(
    args: Prisma.GraphQlSupportFindManyArgs
  ): Promise<PrismaGraphQlSupport[]> {
    return this.prisma.graphQlSupport.findMany(args);
  }
  async graphQlSupport(
    args: Prisma.GraphQlSupportFindUniqueArgs
  ): Promise<PrismaGraphQlSupport | null> {
    return this.prisma.graphQlSupport.findUnique(args);
  }
  async createGraphQlSupport(
    args: Prisma.GraphQlSupportCreateArgs
  ): Promise<PrismaGraphQlSupport> {
    return this.prisma.graphQlSupport.create(args);
  }
  async updateGraphQlSupport(
    args: Prisma.GraphQlSupportUpdateArgs
  ): Promise<PrismaGraphQlSupport> {
    return this.prisma.graphQlSupport.update(args);
  }
  async deleteGraphQlSupport(
    args: Prisma.GraphQlSupportDeleteArgs
  ): Promise<PrismaGraphQlSupport> {
    return this.prisma.graphQlSupport.delete(args);
  }
}
