import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutoMlServiceBase } from "./base/autoMl.service.base";

@Injectable()
export class AutoMlService extends AutoMlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
