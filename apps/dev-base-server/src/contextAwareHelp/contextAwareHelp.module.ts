import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ContextAwareHelpModuleBase } from "./base/contextAwareHelp.module.base";
import { ContextAwareHelpService } from "./contextAwareHelp.service";
import { ContextAwareHelpController } from "./contextAwareHelp.controller";
import { ContextAwareHelpResolver } from "./contextAwareHelp.resolver";

@Module({
  imports: [ContextAwareHelpModuleBase, forwardRef(() => AuthModule)],
  controllers: [ContextAwareHelpController],
  providers: [ContextAwareHelpService, ContextAwareHelpResolver],
  exports: [ContextAwareHelpService],
})
export class ContextAwareHelpModule {}
