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
  WorkflowBuilders as PrismaWorkflowBuilders,
} from "@prisma/client";

export class WorkflowBuildersServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WorkflowBuildersCountArgs, "select">
  ): Promise<number> {
    return this.prisma.workflowBuilders.count(args);
  }

  async workflowBuildersItems(
    args: Prisma.WorkflowBuildersFindManyArgs
  ): Promise<PrismaWorkflowBuilders[]> {
    return this.prisma.workflowBuilders.findMany(args);
  }
  async workflowBuilders(
    args: Prisma.WorkflowBuildersFindUniqueArgs
  ): Promise<PrismaWorkflowBuilders | null> {
    return this.prisma.workflowBuilders.findUnique(args);
  }
  async createWorkflowBuilders(
    args: Prisma.WorkflowBuildersCreateArgs
  ): Promise<PrismaWorkflowBuilders> {
    return this.prisma.workflowBuilders.create(args);
  }
  async updateWorkflowBuilders(
    args: Prisma.WorkflowBuildersUpdateArgs
  ): Promise<PrismaWorkflowBuilders> {
    return this.prisma.workflowBuilders.update(args);
  }
  async deleteWorkflowBuilders(
    args: Prisma.WorkflowBuildersDeleteArgs
  ): Promise<PrismaWorkflowBuilders> {
    return this.prisma.workflowBuilders.delete(args);
  }
}
