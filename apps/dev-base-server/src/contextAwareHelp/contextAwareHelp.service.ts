import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContextAwareHelpServiceBase } from "./base/contextAwareHelp.service.base";

@Injectable()
export class ContextAwareHelpService extends ContextAwareHelpServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
