import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ZeroTrustSecurityServiceBase } from "./base/zeroTrustSecurity.service.base";

@Injectable()
export class ZeroTrustSecurityService extends ZeroTrustSecurityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
