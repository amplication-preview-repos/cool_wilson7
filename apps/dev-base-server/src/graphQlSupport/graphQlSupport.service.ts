import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GraphQlSupportServiceBase } from "./base/graphQlSupport.service.base";

@Injectable()
export class GraphQlSupportService extends GraphQlSupportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
