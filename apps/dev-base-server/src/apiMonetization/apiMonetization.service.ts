import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ApiMonetizationServiceBase } from "./base/apiMonetization.service.base";

@Injectable()
export class ApiMonetizationService extends ApiMonetizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
