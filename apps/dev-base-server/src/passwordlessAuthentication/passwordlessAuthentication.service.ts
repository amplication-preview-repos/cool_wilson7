import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordlessAuthenticationServiceBase } from "./base/passwordlessAuthentication.service.base";

@Injectable()
export class PasswordlessAuthenticationService extends PasswordlessAuthenticationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
