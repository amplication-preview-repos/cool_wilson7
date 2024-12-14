import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContinuousAuthenticationServiceBase } from "./base/continuousAuthentication.service.base";

@Injectable()
export class ContinuousAuthenticationService extends ContinuousAuthenticationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
