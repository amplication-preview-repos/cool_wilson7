import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RealTimeTranslationModuleBase } from "./base/realTimeTranslation.module.base";
import { RealTimeTranslationService } from "./realTimeTranslation.service";
import { RealTimeTranslationController } from "./realTimeTranslation.controller";
import { RealTimeTranslationResolver } from "./realTimeTranslation.resolver";

@Module({
  imports: [RealTimeTranslationModuleBase, forwardRef(() => AuthModule)],
  controllers: [RealTimeTranslationController],
  providers: [RealTimeTranslationService, RealTimeTranslationResolver],
  exports: [RealTimeTranslationService],
})
export class RealTimeTranslationModule {}
