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
  AccessibilityCompliance as PrismaAccessibilityCompliance,
} from "@prisma/client";

export class AccessibilityComplianceServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AccessibilityComplianceCountArgs, "select">
  ): Promise<number> {
    return this.prisma.accessibilityCompliance.count(args);
  }

  async accessibilityCompliances(
    args: Prisma.AccessibilityComplianceFindManyArgs
  ): Promise<PrismaAccessibilityCompliance[]> {
    return this.prisma.accessibilityCompliance.findMany(args);
  }
  async accessibilityCompliance(
    args: Prisma.AccessibilityComplianceFindUniqueArgs
  ): Promise<PrismaAccessibilityCompliance | null> {
    return this.prisma.accessibilityCompliance.findUnique(args);
  }
  async createAccessibilityCompliance(
    args: Prisma.AccessibilityComplianceCreateArgs
  ): Promise<PrismaAccessibilityCompliance> {
    return this.prisma.accessibilityCompliance.create(args);
  }
  async updateAccessibilityCompliance(
    args: Prisma.AccessibilityComplianceUpdateArgs
  ): Promise<PrismaAccessibilityCompliance> {
    return this.prisma.accessibilityCompliance.update(args);
  }
  async deleteAccessibilityCompliance(
    args: Prisma.AccessibilityComplianceDeleteArgs
  ): Promise<PrismaAccessibilityCompliance> {
    return this.prisma.accessibilityCompliance.delete(args);
  }
}
