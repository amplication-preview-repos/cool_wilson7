import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmotionAiModuleBase } from "./base/emotionAi.module.base";
import { EmotionAiService } from "./emotionAi.service";
import { EmotionAiController } from "./emotionAi.controller";
import { EmotionAiResolver } from "./emotionAi.resolver";

@Module({
  imports: [EmotionAiModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmotionAiController],
  providers: [EmotionAiService, EmotionAiResolver],
  exports: [EmotionAiService],
})
export class EmotionAiModule {}
