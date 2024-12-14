import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataRetentionPoliciesServiceBase } from "./base/dataRetentionPolicies.service.base";

@Injectable()
export class DataRetentionPoliciesService extends DataRetentionPoliciesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
