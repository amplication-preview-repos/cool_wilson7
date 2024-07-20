import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MultiLanguageRuntimeEnvironmentModuleBase } from "./base/multiLanguageRuntimeEnvironment.module.base";
import { MultiLanguageRuntimeEnvironmentService } from "./multiLanguageRuntimeEnvironment.service";
import { MultiLanguageRuntimeEnvironmentController } from "./multiLanguageRuntimeEnvironment.controller";
import { MultiLanguageRuntimeEnvironmentResolver } from "./multiLanguageRuntimeEnvironment.resolver";

@Module({
  imports: [
    MultiLanguageRuntimeEnvironmentModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [MultiLanguageRuntimeEnvironmentController],
  providers: [
    MultiLanguageRuntimeEnvironmentService,
    MultiLanguageRuntimeEnvironmentResolver,
  ],
  exports: [MultiLanguageRuntimeEnvironmentService],
})
export class MultiLanguageRuntimeEnvironmentModule {}
