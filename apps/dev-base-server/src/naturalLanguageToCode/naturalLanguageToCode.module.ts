import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NaturalLanguageToCodeModuleBase } from "./base/naturalLanguageToCode.module.base";
import { NaturalLanguageToCodeService } from "./naturalLanguageToCode.service";
import { NaturalLanguageToCodeController } from "./naturalLanguageToCode.controller";
import { NaturalLanguageToCodeResolver } from "./naturalLanguageToCode.resolver";

@Module({
  imports: [NaturalLanguageToCodeModuleBase, forwardRef(() => AuthModule)],
  controllers: [NaturalLanguageToCodeController],
  providers: [NaturalLanguageToCodeService, NaturalLanguageToCodeResolver],
  exports: [NaturalLanguageToCodeService],
})
export class NaturalLanguageToCodeModule {}
