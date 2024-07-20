import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VoiceControlledDevelopmentModuleBase } from "./base/voiceControlledDevelopment.module.base";
import { VoiceControlledDevelopmentService } from "./voiceControlledDevelopment.service";
import { VoiceControlledDevelopmentController } from "./voiceControlledDevelopment.controller";
import { VoiceControlledDevelopmentResolver } from "./voiceControlledDevelopment.resolver";

@Module({
  imports: [VoiceControlledDevelopmentModuleBase, forwardRef(() => AuthModule)],
  controllers: [VoiceControlledDevelopmentController],
  providers: [
    VoiceControlledDevelopmentService,
    VoiceControlledDevelopmentResolver,
  ],
  exports: [VoiceControlledDevelopmentService],
})
export class VoiceControlledDevelopmentModule {}
