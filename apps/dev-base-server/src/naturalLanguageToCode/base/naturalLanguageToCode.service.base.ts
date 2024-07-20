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
  NaturalLanguageToCode as PrismaNaturalLanguageToCode,
} from "@prisma/client";

export class NaturalLanguageToCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.NaturalLanguageToCodeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.naturalLanguageToCode.count(args);
  }

  async naturalLanguageToCodes(
    args: Prisma.NaturalLanguageToCodeFindManyArgs
  ): Promise<PrismaNaturalLanguageToCode[]> {
    return this.prisma.naturalLanguageToCode.findMany(args);
  }
  async naturalLanguageToCode(
    args: Prisma.NaturalLanguageToCodeFindUniqueArgs
  ): Promise<PrismaNaturalLanguageToCode | null> {
    return this.prisma.naturalLanguageToCode.findUnique(args);
  }
  async createNaturalLanguageToCode(
    args: Prisma.NaturalLanguageToCodeCreateArgs
  ): Promise<PrismaNaturalLanguageToCode> {
    return this.prisma.naturalLanguageToCode.create(args);
  }
  async updateNaturalLanguageToCode(
    args: Prisma.NaturalLanguageToCodeUpdateArgs
  ): Promise<PrismaNaturalLanguageToCode> {
    return this.prisma.naturalLanguageToCode.update(args);
  }
  async deleteNaturalLanguageToCode(
    args: Prisma.NaturalLanguageToCodeDeleteArgs
  ): Promise<PrismaNaturalLanguageToCode> {
    return this.prisma.naturalLanguageToCode.delete(args);
  }
}
