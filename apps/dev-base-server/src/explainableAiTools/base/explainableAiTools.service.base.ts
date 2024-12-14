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
  ExplainableAiTools as PrismaExplainableAiTools,
} from "@prisma/client";

export class ExplainableAiToolsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ExplainableAiToolsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.explainableAiTools.count(args);
  }

  async explainableAiToolsItems(
    args: Prisma.ExplainableAiToolsFindManyArgs
  ): Promise<PrismaExplainableAiTools[]> {
    return this.prisma.explainableAiTools.findMany(args);
  }
  async explainableAiTools(
    args: Prisma.ExplainableAiToolsFindUniqueArgs
  ): Promise<PrismaExplainableAiTools | null> {
    return this.prisma.explainableAiTools.findUnique(args);
  }
  async createExplainableAiTools(
    args: Prisma.ExplainableAiToolsCreateArgs
  ): Promise<PrismaExplainableAiTools> {
    return this.prisma.explainableAiTools.create(args);
  }
  async updateExplainableAiTools(
    args: Prisma.ExplainableAiToolsUpdateArgs
  ): Promise<PrismaExplainableAiTools> {
    return this.prisma.explainableAiTools.update(args);
  }
  async deleteExplainableAiTools(
    args: Prisma.ExplainableAiToolsDeleteArgs
  ): Promise<PrismaExplainableAiTools> {
    return this.prisma.explainableAiTools.delete(args);
  }
}
