import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VoiceControlledDevelopmentServiceBase } from "./base/voiceControlledDevelopment.service.base";

@Injectable()
export class VoiceControlledDevelopmentService extends VoiceControlledDevelopmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
