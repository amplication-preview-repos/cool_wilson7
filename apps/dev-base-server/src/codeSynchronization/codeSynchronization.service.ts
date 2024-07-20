import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CodeSynchronizationServiceBase } from "./base/codeSynchronization.service.base";

@Injectable()
export class CodeSynchronizationService extends CodeSynchronizationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
