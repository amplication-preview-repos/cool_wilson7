import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MultiLanguageRuntimeEnvironmentServiceBase } from "./base/multiLanguageRuntimeEnvironment.service.base";

@Injectable()
export class MultiLanguageRuntimeEnvironmentService extends MultiLanguageRuntimeEnvironmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
