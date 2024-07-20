import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CodeSynchronizationModuleBase } from "./base/codeSynchronization.module.base";
import { CodeSynchronizationService } from "./codeSynchronization.service";
import { CodeSynchronizationController } from "./codeSynchronization.controller";
import { CodeSynchronizationResolver } from "./codeSynchronization.resolver";

@Module({
  imports: [CodeSynchronizationModuleBase, forwardRef(() => AuthModule)],
  controllers: [CodeSynchronizationController],
  providers: [CodeSynchronizationService, CodeSynchronizationResolver],
  exports: [CodeSynchronizationService],
})
export class CodeSynchronizationModule {}
