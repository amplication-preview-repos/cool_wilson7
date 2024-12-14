import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DecentralizedIdentityServiceBase } from "./base/decentralizedIdentity.service.base";

@Injectable()
export class DecentralizedIdentityService extends DecentralizedIdentityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
