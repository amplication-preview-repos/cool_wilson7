import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NaturalLanguageToCodeServiceBase } from "./base/naturalLanguageToCode.service.base";

@Injectable()
export class NaturalLanguageToCodeService extends NaturalLanguageToCodeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
