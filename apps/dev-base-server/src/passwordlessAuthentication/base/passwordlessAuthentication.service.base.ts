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
  PasswordlessAuthentication as PrismaPasswordlessAuthentication,
} from "@prisma/client";

export class PasswordlessAuthenticationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PasswordlessAuthenticationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.passwordlessAuthentication.count(args);
  }

  async passwordlessAuthentications(
    args: Prisma.PasswordlessAuthenticationFindManyArgs
  ): Promise<PrismaPasswordlessAuthentication[]> {
    return this.prisma.passwordlessAuthentication.findMany(args);
  }
  async passwordlessAuthentication(
    args: Prisma.PasswordlessAuthenticationFindUniqueArgs
  ): Promise<PrismaPasswordlessAuthentication | null> {
    return this.prisma.passwordlessAuthentication.findUnique(args);
  }
  async createPasswordlessAuthentication(
    args: Prisma.PasswordlessAuthenticationCreateArgs
  ): Promise<PrismaPasswordlessAuthentication> {
    return this.prisma.passwordlessAuthentication.create(args);
  }
  async updatePasswordlessAuthentication(
    args: Prisma.PasswordlessAuthenticationUpdateArgs
  ): Promise<PrismaPasswordlessAuthentication> {
    return this.prisma.passwordlessAuthentication.update(args);
  }
  async deletePasswordlessAuthentication(
    args: Prisma.PasswordlessAuthenticationDeleteArgs
  ): Promise<PrismaPasswordlessAuthentication> {
    return this.prisma.passwordlessAuthentication.delete(args);
  }
}
