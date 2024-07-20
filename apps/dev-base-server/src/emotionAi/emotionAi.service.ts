import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EmotionAiServiceBase } from "./base/emotionAi.service.base";

@Injectable()
export class EmotionAiService extends EmotionAiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
